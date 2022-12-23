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
 

     const ObjectIDs = {
        idOne : 1 , 
        idTow : 2 , 
        idThree : 3 , 

     }
    return (
        <div key={0} className=' -ml-[25rem]  h-auto w-[35rem] flex justify-start  ' ref={emblaRef} >
            <div className=" flex justify-start  items-start ">
                <article className="  w-[20rem] h-[34rem] "> 
                <Card sendPro={ObjectIDs.idOne}  />
                 </article>

                 <article className="  w-[20rem] h-[34rem] "> 
                <Card sendPro={ObjectIDs.idTow } />
                 </article>
                 <article className="  w-[20rem] h-[34rem] ">   
                <Card sendPro={ObjectIDs.idThree} />
                 </article>
            </div>
        </div>
    );
}

export default Carousel;
