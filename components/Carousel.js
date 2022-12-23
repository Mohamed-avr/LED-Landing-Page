import React  , {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Card from './Card';

const Carousel = () => {

    const [emblaRef , emblaApi] = useEmblaCarousel({loop:false});

     useEffect( ()=> {
        if(emblaApi) {
         // ready 
        }
     } , [emblaApi] )

    return (
        <div className=' -ml-[25rem]  h-auto w-[35rem] flex justify-start  ' ref={emblaRef} >
            <div className=" flex justify-start  items-start ">
                <article className="  w-[20rem] h-[34rem] "> 
                <Card/>
                 </article>
                 <article className="  w-[20rem] h-[34rem] "> 
                <Card/>
                 </article>
                 <article className="  w-[20rem] h-[34rem] "> 
                <Card/>
                 </article>
                {/* <article className=" w-[25rem] h-36 bg-slate-400 ">Slide 2</article>
                <article className=" w-[25rem] h-36 bg-slate-500 ">Slide 3</article> */}
            </div>
        </div>
    );
}

export default Carousel;
