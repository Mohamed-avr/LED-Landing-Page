import Image from "next/image";
import { useState , useRef} from "react";
import SectionTwo from "./SectionTwo";


export default function Banner() {

  // js workshop
   const [button , setButton] = useState(false);
   
  const accessRef = useRef();


  function handelingChanges() {
   setButton( button === false ? true : false  );
   console.log(button)
  }



  return (
    <section className="mt-14 relative overflow-hidden  ">
      <div className=" absolute  sm:top-10 top-[20rem] -right-10  ">
        <Image
          src={"/itemsViruses.png"}
          width={150}
          height={150}
          alt={"viruess-icons"}
        />
      </div>

      <div className="flex justify-center sm:flex-row flex-col items-center sm:px-20  px-10 ">
        {/*  left  */}
        <div className=" sm:w-2/4 w-full  sm:h-[30rem] h-[20rem] flex justify-center sm:space-y-8 space-y-4 sm:items-start items-center  flex-col">
          <h3 className="sm:text-7xl sm:text-left  text-center text-3xl capitalize  font-bold">
            the best <span className="text-primary ">defense</span> against
          </h3>
          <p className="text-gray-300 text-xl"> viruses , germs & bacteria </p> 

          { button ? 
            <button 
           onClick={handelingChanges}
           ref={accessRef} 
           className="bg-primary  px-2 pr-4 py-2 rounded-full flex justify-between items-center ">
            <div className="bg-white/30  p-2 rounded-full space-x-2 mr ">
              <Image
                src={"/cart.png"}
                width={"22"}
                height={"22"}
                alt={"cart-icon"}
              />
            </div>
            <div className="ml-2 text-white/80 text-xs font-light uppercase">
              please wait
            </div>
          </button>
           :
           <button 
               onClick={handelingChanges}
           ref={accessRef} 
           className="bg-primary  px-2 pr-4 py-2 rounded-full flex justify-between items-center ">
            <div className="bg-white/30  p-2 rounded-full space-x-2 mr ">
              <Image
                src={"/cart.png"}
                width={"22"}
                height={"22"}
                alt={"cart-icon"}
              />
            </div>
            <div className="ml-2 text-white/80 text-xs font-light uppercase">
              get yours now
            </div>
          </button>
          }
          

          <div className=" sm:w-2/4 h-14 flex  ">
            <div className=" flex">
              <Image src={"/stars.svg"} width={60} height={100} alt={"stars"} />
              <div>
                <div className="ml-2" >
                  <h5 className="text-xl font-bold sm:text-xl "> 4.6</h5>
                  <h6 className="text-sm font-medium text-gray-400 " > rating</h6>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="users ml-6">
                <Image
                  src={"/person1.png"}
                  width={50}
                  height={50}
                  alt={"persona"}
                />
              </div>
              <div className="users -ml-3">
                <Image
                  src={"/person2.png"}
                  width={50}
                  height={50}
                  alt={"persona"}
                />
              </div>
              <div className="users -ml-3"> 
                <Image
                  src={"/person3.png"}
                  width={50}
                  height={50}
                  alt={"persona"}
                />
              </div>
            </div>
          </div>
        </div>
        {/*  right */}
        <div className=" sm:mt-0 absolute right-0  -z-10 sm:-top-[2rem] top-[13rem] sm:right-24   sm:w-[35rem] sm:h-[35rem]  flex justify-center items-center  ">
          <Image
            src={"/gradientCircle.png"}
            width={600}
            height={600}
            alt={"blue-cycle"}
          />
        </div>
        <div className=" sm:w-2/5  sm:h-[30rem] h-[25rem] flex justify-center items-start align-middle ">
          <Image
            src={"/Visual.png"}
            width={300}
            height={400}
            alt={"heroRightPicture"}
          />
        </div>
      </div>
      {/*   */} 
      <SectionTwo/>
     </section>
  );
}
