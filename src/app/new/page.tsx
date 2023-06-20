import prisma from "@/lib/db";
import Navbar from "@/components/Navbar new";
import { redirect } from "next/navigation";
const NewBlog = () => {
  const addBlog = async (event: FormData) => {
    "use server";
    const title = event.get("title")?.valueOf();
    const content = event.get("content")?.valueOf();
    if (typeof title === "string" && typeof content === "string") {
      await prisma.blog.create({
        data: { title, content },
      });
      redirect("/");
    } else {
      throw new Error("Cannot Create A New Blog. Please Provide Valid Data");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="text-center m-auto my-32">
        <form action={addBlog}>
          <input
            type="text"
            className="border border-gray-700 mx-auto lg:w-1/3 w-full p-2 rounded-md block my-10"
            placeholder="Title"
            name="title"
            id="title"
            required
          />
          <label htmlFor="content" className="font-semibold text-start">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className="border-gray-500 block mx-auto lg:w-1/2 w-full p-2 h-[20rem] my-3"
            placeholder="Content here..."
            rows={60}
            cols={50}
            maxLength={160}
            required
          ></textarea>
          <button
            type="submit"
            className="block my-12 mx-auto bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
