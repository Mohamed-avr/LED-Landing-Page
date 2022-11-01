import Image from "next/image"
export default function Navbar() {
    return (
        <navbar className=''>
           <div className="flex justify-between px-10 bg-gray-200 py-6">
           <div> <Image src={'/logo.png'} width={120} height={60} alt={'logo-Image'} /> </div>
            <div> <Image src={'/MenuIcon.png'} width={30} height={60} alt={'logo-Image'} /></div>
           </div>
        </navbar>
    )   
}
    