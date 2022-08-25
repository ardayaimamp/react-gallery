import React from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "@/store/postSlices";
import { Post } from "@/types/post";
import Input from "@/components/input";
import Button from "@/components/button";

export default function PostForm() {
  const dispatch = useDispatch();

  const onSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const { desc, image } = e.target;
    const post: Post = {
      id: new Date().getTime(),
      desc: desc.value,
      image: image.value,
    };
    dispatch(postAdded(post));
    alert("published!");
    e.target.reset();
  };

  return (
    <form className="bg-white rounded-md shadow-xl p-5" onSubmit={onSubmit}>
      <h1 className="text-gray-800 font-bold text-2xl mb-4">
        Share your shot!
      </h1>
      <Input name="image" type="url" placeholder="Image URL" required />
      <Input
        name="desc"
        type="text"
        placeholder="What's on your mind?"
        required
      />
      <Button type="submit">Publish!</Button>
    </form>
  );
}
