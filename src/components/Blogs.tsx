"use client";
import like from "../assets/thumb icon.svg";
import dislike from "../assets/unlike.svg";
import liked from "../assets/like.svg";
import disliked from "../assets/unlike black.svg";
import trash from "../assets/delete.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Blog = {
  id: string;
  title: string;
  content: string;
  Liked: boolean;
  Disliked: boolean;
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
  handleDelete: (id: string) => void;
};
const Blogs = ({
  title,
  id,
  content,
  Liked,
  Disliked,
  handleLike,
  handleDislike,
  handleDelete,
}: Blog) => {
  const router = useRouter();
  return (
    <div className="bg-white w-[22rem] px-6 py-3 m-12 text-start rounded-md shadow-md shadow-gray-500 hover:shadow-sm cursor-pointer">
      <h2 className="text-1xl font-semibold text-center border-b-2 border-gray-400 mb-4">
        {title}
      </h2>
      <p>{content}</p>
      <div className="flex justify-between">
        <div className="flex">
          <button
            className="text-white rounded-md mb-0"
            onClick={() => {
              handleLike(id);
              return router.refresh();
            }}
          >
            {Liked ? (
              <Image src={liked} alt="Like" width={30} />
            ) : (
              <Image src={like} alt="Like" width={30} />
            )}
          </button>
          <button
            className="text-white rounded-md mb-0 ml-5"
            onClick={() => {
              handleDislike(id);
              return router.refresh();
            }}
          >
            {!Disliked || Liked ? (
              <Image src={dislike} alt="Like" width={30} />
            ) : (
              <Image src={disliked} alt="Like" width={30} />
            )}
          </button>
        </div>
        <button
          onClick={() => {
            handleDelete(id);
            return router.refresh();
          }}
        >
          <Image src={trash} alt="Delete" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
