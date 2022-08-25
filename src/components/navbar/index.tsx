import Link from "@/components/link";

export default function index() {
  return (
    <div className="w-screen bg-white shadow-md h-16 p-5 flex">
      <p className="font-bold text-lg">React Gallery</p>
      <Link href="/" className="ml-auto">Logout</Link>
    </div>
  );
}
