'use server'

import prisma from "@/lib/db";

export const addBlog = async (event: FormData) => {
    "use server";
    const title = event.get("title")?.valueOf();
    const content = event.get("content")?.valueOf();
    if (typeof title === "string" && typeof content === "string") {
        await prisma.blog.create({
            data: { title, content },
        });
    } else {
        throw new Error("Cannot Create A New Blog. Please Provide Valid Data");
    }
};