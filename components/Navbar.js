import Image from "next/image"
export default function Navbar() {
    return (
        <navbar className=''>
           <div className="flex justify-between items-center px-10  py-5">
           <div> <Image src={'/logo.png'} width={120} height={60} alt={'logo-Image'} /> </div>
            <div> <Image src={'/MenuIcon.png'} width={20} height={43} alt={'logo-Image'} /></div>
           </div>
        </navbar>
    )   
}
