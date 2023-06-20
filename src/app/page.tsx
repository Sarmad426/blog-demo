import NavbarHome from "@/components/Navbar home";
import prisma from "@/lib/db";
import Blogs from "@/components/Blogs";
const getBlogs = async () => {
  return await prisma.blog.findMany();
};
export default async function Home() {
  const blogs = await getBlogs();
  const handleLike = async (id: string) => {
    "use server";
    const blog = await prisma.blog.findUnique({ where: { id } });
    if (blog?.Liked) {
      await prisma.blog.update({ where: { id }, data: { Liked: false } });
    } else {
      await prisma.blog.update({
        where: { id },
        data: { Liked: true, Disliked: false },
      });
    }
  };
  const handleDislike = async (id: string) => {
    "use server";
    const blog = await prisma.blog.findUnique({ where: { id } });
    if (!blog?.Disliked) {
      await prisma.blog.update({
        where: { id },
        data: { Liked: false, Disliked: true },
      });
    } else {
      await prisma.blog.update({
        where: { id },
        data: { Disliked: false },
      });
    }
  };
  const handleDelete = async (id: string) => {
    "use server";
    await prisma.blog.delete({ where: { id } });
  };
  return (
    <main>
      <NavbarHome />
      <div className="w-full h-full text-center flex flex-wrap bg-gray-200 justify-start py-16">
        {blogs.map((blog) => {
          return (
            <Blogs
              key={blog.id}
              {...blog}
              handleLike={handleLike}
              handleDislike={handleDislike}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </main>
  );
}
