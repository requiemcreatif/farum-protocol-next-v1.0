import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" mt-20 h-full lg:max-w-[1200px] mx-auto">
        <h1 className=" text-6xl text-center">Farum Protocol</h1>
        <p className="mt-20 px-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dicta
          explicabo laboriosam eaque recusandae animi, nam ipsam optio
          architecto maiores ea magni assumenda facere veritatis, reprehenderit
          vero dignissimos nesciunt iusto.
        </p>
        <div className="grid lg:grid-cols-2 gap-5 mt-10 px-20">
          <Link href={"/register"}>
            <button
              type="button"
              className="text-white w-full bg-black hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </Link>

          <Link href={"/register"}>
            <button
              type="button"
              className="text-white w-full bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
