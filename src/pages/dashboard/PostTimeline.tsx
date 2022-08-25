import { useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import { getPosts } from "@/store/postSlices";
import { Post } from "@/types/post";

export default function PostTimeline() {
  const posts = useSelector(getPosts);

  const card = (post: Post) => {
    return (
      <div
        className="rounded overflow-hidden border w-full bg-white my-4 shadow-md"
        key={post.id}
      >
        <img className="w-full bg-cover" src={post.image} alt="photos" />
        <div className="px-3 pb-2">
          <div className="pt-1">
            <div className="mb-2 text-sm">{post.desc}</div>
          </div>
        </div>
      </div>
    );
  };

  const emptyState = () => (
    <>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_dmw3t0vg.json"
        style={{
          height: "300px",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></Player>
      <p className="text-center">
        Seems you haven't share any shot, what are you waiting for?
      </p>
    </>
  );

  return (
    <>
      {posts ? posts.map((post: Post) => card(post)) : emptyState()}
      <p>Found {posts.length} photos</p>
    </>
  );
}
