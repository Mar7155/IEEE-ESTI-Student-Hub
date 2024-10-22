import Marquee from "@/components/magicui/marquee";
import image_a from '@/assets/ieee.png';
import image_b from '@/assets/computer_society.png';
import image_c from '@/assets/uaeh.png';
import image_d from '@/assets/estl.png';

const images = [
    {
        id: 1,
        img: image_a,
        alt: 'IEEE',
        width: 'ieee',
    },
    {
        id: 2,
        img: image_b,
        alt: 'IEEE Computer Society',
        width: 'computer_society',
    },
    {
        id: 3,
        img: image_c,
        alt: 'Universidad Autonoma del Estado de Hidalgo',
        width: 'uaeh',
    },
    {
        id: 4,
        img: image_d,
        alt: 'Escuela Superior de Tlahuelilpan',
        width: 'estl',
    },
];


interface CardProps {
    img: string;
    alt: string;
    width: string;
}

const Card = ({ img, alt, width }: CardProps) => {

    const sizeVariants = {
        uaeh: 'w-[12rem]',
        estl: 'w-[12rem]',
        ieee: 'w-[16rem]',
        computer_society: 'w-[16rem]',
    }

    return (
        <img src={img} alt={alt} className={`lg:w-[50%] lg:h-[50%] ${sizeVariants[width]} lg:mx-6 mx-3`}/>
    )
};


export const Carousel = () => {
  return (
    <div className="mt-10 relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover reverse className="[--duration:20s]">
            {images.map((image) => (
                <Card key={image.id} img={image.img} alt={image.alt} width={image.width}/>
            ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  )
}
