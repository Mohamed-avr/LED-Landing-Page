import Image from "next/image";

export default function Banner() {
  return (
    <section className=" bg-gray-400">
      <div className="flex justify-center items-center">
        {/*  left  */}
        <div className=" w-2/4 h-[30rem] flex justify-center space-y-6 items-start  flex-col">
          <h3 className="text-5xl font-medium capitalize"> the best <span className="text-primary "> defense</span> against </h3>
        <p className="text-gray-300"> viruses , germs & bacteria </p>
        <button className="bg-primary px-4 py-2 rounded-full flex justify-center items-center ">
         <div className="bg-white/30 p-2 rounded-full space-x-2 mr "> 
           <Image src={'/cart.png'} width={'25'} height={'25'} alt={'cart-icon'} />
        </div> 
        <div className="ml-2">
        get your today 
        </div>
        </button>
        </div>
        {/*  right */}
        <div className=" w-2/4"></div>
      </div>
    </section>
  );
}
