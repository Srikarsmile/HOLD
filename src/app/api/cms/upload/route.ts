import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

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
        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const folder = (formData.get("folder") as string) || "uploads";

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Generate unique filename
        const ext = file.name.split(".").pop() || "jpg";
        const filename = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

        // Read file buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        // Upload to Supabase Storage
        const { error: uploadError } = await supabaseAdmin.storage
            .from("website-images")
            .upload(filename, buffer, {
                contentType: file.type,
                upsert: false,
            });

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: urlData } = supabaseAdmin.storage
            .from("website-images")
            .getPublicUrl(filename);

        return NextResponse.json({
            success: true,
            url: urlData.publicUrl,
            path: filename,
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Upload failed";
        console.error("Upload error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
