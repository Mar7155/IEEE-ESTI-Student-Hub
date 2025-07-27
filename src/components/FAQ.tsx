import { bebasNeue, jetBrainsMono, montserrat } from "@/lib/fonts";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const accordionData = [
    {
        id: "item-1",
        question: "¿Qué es el IEEE?",
        answer: "IEEE significa 'Institute of Electrical and Electronics Engineers' (Instituto de Ingenieros Eléctricos y Electrónicos), es una organización profesional internacional dedicada al avance de la tecnología en diversas áreas, como la ingeniería eléctrica, la electrónica, las telecomunicaciones, la informática y áreas relacionadas. Nuestra rama es una subdivisión local de esta organización."
    },
    {
        id: "item-2",
        question: "¿Qué es la rama estudiantil IEEE - UAEH Escuela Superior de Tlahuelilpan?",
        answer: "Permite a los estudiantes de la universidad participar en actividades y eventos relacionados con la tecnología, la ingeniería y la ciencia. Además, la rama estudiantil de IEEE en nuestra universidad ofrece oportunidades para que los estudiantes se conecten con profesionales de la industria y otros estudiantes de todo el mundo."
    },
    {
        id: "item-3",
        question: "¿Cuáles son los beneficios de pertenecer a la rama estudiantil?",
        answer: "Participar en actividades del instituto. Descuentos exclusivos para miembros. Formar parte del comité de la rama estudiantil. Correo electrónico con dominio del ieee.org"
    },
    {
        id: "item-4",
        question: "¿Qué tipo de actividades se realizan dentro de la rama estudiantil?",
        answer: "¡Talleres, conferencias, eventos y más! dentro de este sitio web te puedes enterar de las actividades que se realizan.",
    },
];

export const FAQ = () => {
    return (
        <section className="flex flex-col items-center justify-center mt-20 mb-20" id='faq'>
            <h1 className={`${bebasNeue.className} font-bold text-[#0371a4] text-center text-7xl lg:text-8xl xl:text-9xl`}>
                FAQ
            </h1>
            <p className={`${jetBrainsMono.className} text-sm lg:text-lg text-center font-jetbrains mt-4 max-w-6xl whitespace-normal break-words px-6 lg:px-0 text-black`}>
                ¿Tienes alguna pregunta sobre la Rama Estudiantil IEEE - ESTl? Consulta nuestras preguntas frecuentes para obtener respuestas a algunas de las preguntas más comunes que recibimos.
            </p>
            <div className="max-w-2xl mx-auto p-6 mt-10">
                <Accordion type="single" collapsible className="w-full">
                {accordionData.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger className={`${montserrat.className} text-sm lg:text-xl text-left font-bold`}>
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className={`${jetBrainsMono.className} text-tiny lg:text-sm`}>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            </div>
        </section>
    )
}