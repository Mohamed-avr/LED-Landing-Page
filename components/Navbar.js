import Image from "next/image"
export default function Navbar() {
    return (
        <navbar className='bg-gray-300 px-20'>
           <div className="flex justify-between px-10 ">
           <div> <Image src={'/logo.png'} width={120} height={60} alt={'logo-Image'} /> </div>
            <div> <Image src={'/MenuIcon.png'} width={30} height={60} alt={'logo-Image'} /></div>
           </div>
        </navbar>
    )   
}
