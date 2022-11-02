import Image from "next/image";

export default function Banner() {
  return (
    <section className=" bg-gray-400">
      <div className="flex justify-center items-center">
        {/*  left  */}
        <div className="teft-left w-2/4 h-[30rem]">
          <h3 className="text-5xl font-medium capitalize"> the best <span className="text-red-400 "> defense</span> against </h3>
        <p className="text-gray-300"> viruses , germs & bacteria </p>
        </div>
        {/*  right */}
        <div className="teft-left w-2/4"></div>
      </div>
    </section>
  );
}
