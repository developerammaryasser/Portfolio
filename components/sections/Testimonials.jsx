import { approach, companies, testimonials, workExperience } from "@/data";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import Section from "./Section";
import Image from "next/image";
import { CanvasRevealEffect } from "../ui/CanvasRevealEffect";
import Card from "@/components/elements/Card";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      title={
        <>
          Kind words from <span className="text-purple">satisfied clients</span>
        </>
      }
      className="space-y-24 relative z-10"
    >
      <div>
        <InfiniteMovingCards items={testimonials} speed="slow" />
        <div className="flex flex-wrap items-center justify-around gap-6 my-12 w-full">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="w-fit flex flex-row items-center gap-3">
              <Image
                src={img}
                alt={nameImg}
                width={250}
                height={150}
                className="size-[3rem]"
              />
              {name}
            </div>
          ))}
        </div>
      </div>
      <Section
        title={
          <>
            My <span className="text-purple">work experience</span>
          </>
        }
        isContainer={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {workExperience.map(({ id, title, desc, className, thumbnail }) => (
            <HoverBorderGradient
              key={id}
              containerClassName={`rounded-3xl bg-black-200 border border-white/[0.1] overflow-hidden ${className}`}
              as="div"
              className={`flex items-center justify-between gap-8 p-8`}
            >
              <Image src={thumbnail} alt={title} width={150} height={150} />
              <div className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
                <p className="text-base text-blue-100">{desc}</p>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </Section>
      <Section
        title={
          <>
            My <span className="text-purple">approach</span>
          </>
        }
        isContainer={false}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {approach.map(({ id, title, des, color }) => (
            <Card key={id} id={id} title={title} des={des}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName={color}
                colors={[[125, 211, 252]]}
              />
            </Card>
          ))}
        </div>
      </Section>
    </Section>
  );
};
export default Testimonials;
