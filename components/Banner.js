import Image from "next/image";

export default function Banner() {
  return (
    <section className="mt-14">
      <div className=" absolute  top-0 left-0  ">
         <Image src={'/backgroundBanner.png'} width={1200} height={200} alt={''}  />
      </div>

      <div className="flex justify-center items-center px-20">
        {/*  left  */}
        <div className=" w-2/4 h-[30rem] flex justify-center space-y-6 items-start  flex-col">
          <h3 className="text-7xl  capitalize w-[36rem] font-bold">
            the best <span className="text-primary ">
              defense
            </span> against
          </h3>
          <p className="text-gray-300 text-xl"> viruses , germs & bacteria </p>
          <button className="bg-primary px-2 pr-4 py-2 rounded-full flex justify-between items-center ">
            <div className="bg-white/30  p-2 rounded-full space-x-2 mr ">
              <Image
                src={"/cart.png"}
                width={"22"}
                height={"22"}
                alt={"cart-icon"}
              />
            </div>
            <div className="ml-2 text-white/80 text-xs font-light uppercase">get your today</div>
          </button>
        </div>
        {/*  right */}
        <div className=" w-2/5  h-[30rem] flex justify-center items-start align-middle ">
          <Image src={'/Visual.png'} width={300} height={400} alt={'heroRightPicture'} />
        </div>
      </div>
    </section>
  );
}
