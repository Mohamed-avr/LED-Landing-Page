import Image from "next/image";
import { useState , useRef } from "react";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const innerHTMLContainer = useRef();
  const hoverHandler = () => {
    setIsHovered(() => {
      if (isHovered == false) {
        return true;
      } else {
        return false;
      }
    });
    console.log(isHovered);
  };


 if(isHovered == false) {
   console.log(innerHTMLContainer.current)
  //addEventListener( 'click ' , () => console.log('hello'))
 }


const listName = [1 , 3.4]; 
console.log(listName.map( (e) => Math.SQRT1_2))

  return (
    <navbar className="">
      <div className="flex justify-between items-center px-10   py-5">
        <div>
          {" "}
          <Image
            src={"/logo.png"}
            width={120}
            height={60}
            alt={"logo-Image"}
          />{" "}
        </div>
        <button onClick={hoverHandler} className="hover:bg-blue-400">
          <Image
            src={"/MenuIcon.png"}
            width={20}
            height={43}
            alt={"iconMenu"}
          />
        </button>
      </div>

      { isHovered ?  
      <div ref={innerHTMLContainer} className="bg-primary  border-r-2 border-primary flex items-center justify-center flex-col py-10 absolute top-0 left-0 w-2/4 z-10 h-full ">
  <ul className="flex justify-center relative flex-col   items-center space-y-10   mt-2 " >
    <li key={1} className='font-medium text-2xl hover:text-4xl hover:transition-all transition-transform capitalize text-white '> home</li>
    <li key={1} className='font-normal text-2xl capitalize text-white '>the product</li>
    <li key={1} className='font-normal text-2xl capitalize text-white '> customers </li>
    <li key={1}className='font-normal text-2xl capitalize text-white '> contact us </li>
  </ul>

  {/* animations icons */}
  <div className=" animate-bounce  absolute  top-20 left-0">
  <Image src={'/virus.png'} alt={'virus'} width={40} height={30} />
  </div>

  <div className="  animate-bounce hover w-10 h-10  absolute  bottom-24 right-40">
    <Image src={'/virus2.png'} alt={'virus'} width={50} height={50} />
  </div>

</div>:''}

    
    </navbar>
  );
}
