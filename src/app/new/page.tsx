"use client";

import Navbar from "@/components/Navbar new";
import { useState } from "react";
import { addBlog } from "@/actions/actions";
const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <Navbar />
      <div className="text-center m-auto my-32">
        <form
          action={addBlog}
          onSubmit={() => {
            setTitle("");
            setContent("");
          }}
        >
          <input
            type="text"
            className="border border-gray-700 mx-auto lg:w-1/3 w-full p-2 rounded-md block my-10"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            spellCheck
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
