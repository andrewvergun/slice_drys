'use client'

import Image from 'next/image'
import gsap from 'gsap'
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

    useEffect(() => {
        (gsap.utils.toArray(".animated-section") as HTMLElement[]).forEach((section, index) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 200 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                        toggleActions: "play none none reverse none",
                    },
                }
            );
        });
    }, []);

    return (
        <>
            <section className="flex flex-col m-[100px] mt-[300px] w-[1240px] animated-section">
                <div className="flex flex-row space-between">
                    <div className="flex flex-col">
                        <div className='flex flex-row w-[631px] h-[238px] mr-[62px] align-center' >
                            <Image src={'/images/Frame_564.png'} width={175} height={238} alt="Slice&Dry's Image" />
                            <Image src={'/images/Frame_574.svg'} width={135} height={43} className='mt-[92px] ml-[49px] mb-[103px]' alt="Slice&Dry's Image" />
                        </div>
                        <div>
                            <p className='mt-[76px] w-[631px] text-xl font-poppins'>
                            не просто бізнес, а сімейна справа, яка почалася ще з давніх традицій нашої родини. Усе почалося кілька поколінь тому, коли наші прадіди на зиму сушили м'ясо, фрукти й овочі, щоб зберегти їх смак і користь. Ще тоді ми зрозуміли, що натуральні продукти – це найкраще, що можна дати своїм близьким. У ті часи вся родина збиралася за столом, де завжди були ароматні сушені ласощі, зроблені з любов'ю та увагою до деталей.
                            </p>
                        </div>
                    </div>
                    <Image src={'/images/IMG_5241_2.png'} width={547} height={675} alt="Slice&Dry's Image"/>
                </div>
            </section>
            <div>
                <section className='bg-black flex flex-row animated-section'>
                    <div >
                        <Image src={'/images/IMG_5238_2.jpg'} width={688} height={486} className='my-[78px] mr-[92px]' alt="Slice&Dry's Image"/>
                    </div> 
                    <div className='flex flex-col py-[94.5px] w-[544px] h-[453px] items-center'>
                        <Image src={'/images/Mission.svg'}  width={360} height={114} className='mb-[46px]' alt="Slice&Dry's Image"/>
                        <p className='font-poppins text-white text-center text-xl mb-[67px]'>
                        створювати смачні, корисні продукти, 
                        притримуючись філософії натуральності та здоров’я, щоб ви змогли ...
                        </p>
                        <Image src={'/images/kus.svg'} width={332} height={94} className="mb-[42px]" alt="Slice&Dry's Image"/>
                        <Image src={'/images/Vector_102.svg'} width={358} height={13} alt="Slice&Dry's Image"/>
                    </div>
                </section>
                <section className='flex flex-row bg-[#fff] mt-[78px] mx-[103px] mb-[232px] w-[1240px] h-[494px] animated-section'>
                    <div className='w-[672.66px] flex items-center'>
                        <p className='text-xl font-poppins w-[608px] h-[270px] '>
                        З роками ми вирішили поділитися цими традиціями зі світом і так народився наш бренд Slice&Dry's. Ми взяли на озброєння старовинні родинні рецепти та поєднали їх з сучасними технологіями сушіння, щоб подарувати вам справжні смаколики. Наше виробництво розташоване у мальовничому куточку України, де ми ретельно відбираємо тільки найякісніші продукти. Кожен етап, від нарізання до упаковки, контролюється особисто членами нашої родини, адже для нас важливо, щоб ви отримували тільки найкраще.
                        </p>
                    </div>
                    <div>
                        <Image src={'/images/pixelcut.jpg'} width={567.34} height={494} alt="Slice&Dry's Image" />
                    </div>
                    
                </section>
                <Image src={'/images/Rectangle.png'} className='relative top-[-285px] left-[0]' width={148.94} height={207.68} alt="Slice&Dry's Image"/>
            </div>
        </>
    )
}