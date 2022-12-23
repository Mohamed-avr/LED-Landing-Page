import Carousel from "./Carousel";




export default function SectionTwo() {
  return (
    <div  className="flex justify-center sm:flex-row flex-col items-center sm:px-20  px-2 mt-16 ">
      <div className="  sm:w-2/4  w-full  sm:h-[30rem] h-[20rem] flex justify-center sm:space-y-4 space-y-4 sm:items-start items-center  flex-col">
        <h3 className="sm:text-5xl sm:text-left  text-center text-3xl   font-bold">
          UVC LED sterilizing 
        </h3>
        <h4 className="text-primary text-xl font-medium ">wand features</h4>
        <p className="text-gray-500  text-base  sm:pr-20 sm:text-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc
          sed porttitor at nam euismod at mauris. Vitae ac in sit sapien id
          porta in. Enim cursus tempus, arcu gravida at.
        </p>
      </div>
      <div className="h-[22rem] w-[45rem]  overflow-hidden">
         <Carousel/>
      </div>
    </div>
  );
}
