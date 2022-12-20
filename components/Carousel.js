import React  , {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const Carousel = () => {

    const [emblaRef , emblaApi] = useEmblaCarousel({loop:false});

     useEffect( ()=> {
        if(emblaApi) {
         // ready 
        }
     } , [emblaApi] )

    return (
        <div className=' -ml-[25rem]  h-auto w-[35rem] flex justify-start  ' ref={emblaRef} >
            <div className=" flex justify-start  items-start bg-black">
                <article className="  w-[35rem] h-[34rem]  bg-orange-500">Slide 1</article>
                <article className=" w-[25rem] h-36 bg-slate-400 ">Slide 2</article>
                <article className=" w-[25rem] h-36 bg-slate-500 ">Slide 3</article>
            </div>
        </div>
    );
}

export default Carousel;
