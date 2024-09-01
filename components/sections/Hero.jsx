import Button from "@/components/elements/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";
import ArrowSVG from '@/public/arrow.svg'
const Hero = () => {
  return (
    <section className="h-screen">
      <div>
        <Spotlight
          className={`-top-40 -left-10 md:-left-32 md:-top-20 h-screen`}
          fill="white"
        />
      </div>
      <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="container h-full">
        <div className="flex flex-col items-stretch md:items-center justify-center gap-4 z-10 h-full relative">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experiences"
          />
          <p className="text-center text-base text-blue-100 py-4 md:w-[70%] w-full">
            Hi, I&apos;m Ammar, a Next.js Developer based in Croatia.
          </p>
          <Button position="right" icon={<Image src={ArrowSVG} alt="Contact" width={15} height={15}/>}>
            See my work 
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
