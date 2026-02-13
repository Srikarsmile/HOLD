import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

// Auth check
function isAuthorized(request: NextRequest): boolean {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.CMS_API_SECRET;
    if (!secret) return false;
    return authHeader === `Bearer ${secret}`;
}

export async function POST(request: NextRequest) {
    if (!isAuthorized(request)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!supabaseAdmin) {
        return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
    }

    try {
        const body = await request.json();
        const { action } = body;

        let result;

        switch (action) {
            // ─── Section content (JSONB) ───
            case "update_section": {
                const { section, content } = body;
                const { data, error } = await supabaseAdmin
                    .from("site_content")
                    .update({ content, updated_at: new Date().toISOString() })
                    .eq("section", section)
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "update_section_field": {
                const { section, field, value } = body;
                // Fetch current content, update the field, save back
                const { data: current, error: fetchErr } = await supabaseAdmin
                    .from("site_content")
                    .select("content")
                    .eq("section", section)
                    .single();
                if (fetchErr) throw fetchErr;
                const updated = { ...current.content, [field]: value };
                const { data, error } = await supabaseAdmin
                    .from("site_content")
                    .update({ content: updated, updated_at: new Date().toISOString() })
                    .eq("section", section)
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Team Members ───
            case "add_team_member": {
                const { name, role, image_url } = body;
                // Get max sort_order
                const { data: maxRow } = await supabaseAdmin
                    .from("team_members")
                    .select("sort_order")
                    .order("sort_order", { ascending: false })
                    .limit(1)
                    .single();
                const nextOrder = (maxRow?.sort_order ?? 0) + 1;
                const { data, error } = await supabaseAdmin
                    .from("team_members")
                    .insert({ name, role, image_url: image_url || null, sort_order: nextOrder })
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "update_team_member": {
                const { name, updates } = body;
                const { data, error } = await supabaseAdmin
                    .from("team_members")
                    .update(updates)
                    .ilike("name", name)
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "remove_team_member": {
                const { name: memberName } = body;
                const { data, error } = await supabaseAdmin
                    .from("team_members")
                    .delete()
                    .ilike("name", memberName)
                    .select();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Gallery Images ───
            case "add_gallery_image": {
                const { src, alt, caption } = body;
                const { data: maxGal } = await supabaseAdmin
                    .from("gallery_images")
                    .select("sort_order")
                    .order("sort_order", { ascending: false })
                    .limit(1)
                    .single();
                const nextGalOrder = (maxGal?.sort_order ?? 0) + 1;
                const { data, error } = await supabaseAdmin
                    .from("gallery_images")
                    .insert({ src, alt: alt || "", caption: caption || "", sort_order: nextGalOrder })
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "remove_gallery_image": {
                const { caption: galCaption } = body;
                const { data, error } = await supabaseAdmin
                    .from("gallery_images")
                    .delete()
                    .ilike("caption", galCaption)
                    .select();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Programs ───
            case "add_program": {
                const { title, description, tags, image_url: progImg, image_alt: progAlt } = body;
                const { data: maxProg } = await supabaseAdmin
                    .from("programs")
                    .select("sort_order")
                    .order("sort_order", { ascending: false })
                    .limit(1)
                    .single();
                const nextProgOrder = (maxProg?.sort_order ?? 0) + 1;
                const { data, error } = await supabaseAdmin
                    .from("programs")
                    .insert({
                        title,
                        description: description || "",
                        tags: tags || [],
                        image_url: progImg || null,
                        image_alt: progAlt || "",
                        sort_order: nextProgOrder,
                    })
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "update_program": {
                const { title: progTitle, updates: progUpdates } = body;
                const { data, error } = await supabaseAdmin
                    .from("programs")
                    .update(progUpdates)
                    .ilike("title", progTitle)
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "remove_program": {
                const { title: rmProgTitle } = body;
                const { data, error } = await supabaseAdmin
                    .from("programs")
                    .delete()
                    .ilike("title", rmProgTitle)
                    .select();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Events ───
            case "add_event": {
                const { event } = body;
                const { data: maxEvt } = await supabaseAdmin
                    .from("events")
                    .select("sort_order")
                    .order("sort_order", { ascending: false })
                    .limit(1)
                    .single();
                const nextEvtOrder = (maxEvt?.sort_order ?? 0) + 1;
                const slug = (event.title || "event")
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "");
                const { data, error } = await supabaseAdmin
                    .from("events")
                    .insert({ ...event, slug, sort_order: nextEvtOrder })
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "update_event": {
                const { slug: evtSlug, updates: evtUpdates } = body;
                const { data, error } = await supabaseAdmin
                    .from("events")
                    .update(evtUpdates)
                    .eq("slug", evtSlug)
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Stats ───
            case "update_stat": {
                const { label: statLabel, value: statValue, suffix: statSuffix, prefix: statPrefix } = body;
                const updateData: Record<string, unknown> = { value: statValue };
                if (statSuffix !== undefined) updateData.suffix = statSuffix;
                if (statPrefix !== undefined) updateData.prefix = statPrefix;
                const { data, error } = await supabaseAdmin
                    .from("stats")
                    .update(updateData)
                    .ilike("label", statLabel)
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Initiatives ───
            case "add_initiative": {
                const { title: initTitle, detail: initDetail } = body;
                const { data: maxInit } = await supabaseAdmin
                    .from("initiatives")
                    .select("sort_order")
                    .order("sort_order", { ascending: false })
                    .limit(1)
                    .single();
                const nextInitOrder = (maxInit?.sort_order ?? 0) + 1;
                const { data, error } = await supabaseAdmin
                    .from("initiatives")
                    .insert({ title: initTitle, detail: initDetail || "", sort_order: nextInitOrder })
                    .select()
                    .single();
                if (error) throw error;
                result = data;
                break;
            }

            case "remove_initiative": {
                const { title: rmInitTitle } = body;
                const { data, error } = await supabaseAdmin
                    .from("initiatives")
                    .delete()
                    .ilike("title", rmInitTitle)
                    .select();
                if (error) throw error;
                result = data;
                break;
            }

            // ─── Status ───
            case "get_status": {
                const tables = ["site_content", "team_members", "gallery_images", "programs", "initiatives", "events", "stats"];
                const counts: Record<string, number> = {};
                for (const table of tables) {
                    const { count } = await supabaseAdmin.from(table).select("*", { count: "exact", head: true });
                    counts[table] = count ?? 0;
                }
                result = counts;
                break;
            }

            default:
                return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
        }

        // Revalidate the home page and events page
        revalidatePath("/");
        revalidatePath("/events");

        return NextResponse.json({ success: true, result });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("CMS API error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
