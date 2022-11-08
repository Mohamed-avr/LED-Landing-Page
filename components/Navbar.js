import Image from "next/image"
import { useState } from "react"
export default function Navbar() {

     const [isHovered , setIsHovered] = useState(false);
     
     const hoverHandler = () => {
        setIsHovered( () => {
            if(isHovered == false) {
                return true
            } else {
                return false
            }
        } )
        console.log(isHovered)
     }

    return (
        <navbar className=''>
           <div className="flex justify-between items-center px-10   py-5">
           <div> <Image src={'/logo.png'} width={120} height={60} alt={'logo-Image'} /> </div>
           <button
            onClick={hoverHandler}
           className="hover:bg-blue-400" >
          <Image src={'/MenuIcon.png'} width={20} height={43} alt={'iconMenu'} />
           </button>

         
           </div>

           <div className="bg-blue-400 h-[20rem]"> 
            hello
            </div>
        </navbar>
    )   
}
