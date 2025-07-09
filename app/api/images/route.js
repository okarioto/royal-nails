import fs from "fs";
import path from "path";

export async function GET(request) {
    const galleryPath = path.join(process.cwd(), "public/images/gallery");
    try {
        const files = fs.readdirSync(galleryPath).reverse();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "20", 10);

        const startIdx = (page - 1) * limit;
        const endIdx = startIdx + limit;

        const paginatedFiles = files.slice(startIdx, endIdx);


        return Response.json(paginatedFiles);
    } catch (error) {
        return Response.json({ error: "Failed to load images" }, { status: 500 });
    }
}
