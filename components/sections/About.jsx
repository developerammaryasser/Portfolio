import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";
const About = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black-100" id="about">
      <div className="container">
        <BentoGrid>
          {gridItems.map(
            ({
              title,
              titleClassName,
              description,
              className,
              id,
              img,
              imgClassName,
              spareImg,
            }) => (
              <BentoGridItem
                key={id}
                id={id}
                title={title}
                titleClassName={titleClassName}
                description={description}
                img={img}
                imgClassName={imgClassName}
                spareImg={spareImg}
                className={className}
              />
            )
          )}
        </BentoGrid>
      </div>
    </section>
  );
};
export default About;
