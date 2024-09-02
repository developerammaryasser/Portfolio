import { projects } from "@/data";
import { PinContainer } from "../ui/Pin";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import ArrowSVG from '@/public/arrow.svg'
const Projects = () => {
  return (
    <Section
      id="projects"
      title={
        <>
          A small selection of
          <span className="text-purple"> recent projects</span>
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div
            className="flex items-center justify-center h-[42rem] "
            key={project.id}
          >
            <PinContainer
              title={`Linkedin Ammar Yasser`}
              href="https://www.linkedin.com/in/frontend-ammar-yasser/"
              className="p-4 size-full"
            >
              <div className="flex flex-col gap-8 h-full">
                <div className="bg-black-100 h-[40%] md:h-1/2 rounded-3xl p-4 overflow-hidden">
                  <Image
                    width={1500}
                    height={1500}
                    src={project.img}
                    alt={project.title}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 h-[60%] md:h-1/2">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-base text-blue-100">{project.des}</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-4">
                    <ul className="flex ">
                      {project.iconLists.map((icon, i) => (
                        <li
                          key={i}
                          className="border rounded-full flex flex-col items-center justify-center p-4 bg-black-200"
                        >
                          <Image
                            src={icon}
                            alt={project.title}
                            width={20}
                            height={20}
                            className="object-cover"
                          />
                        </li>
                      ))}
                    </ul>
                    <Link href="/" className="flex gap-3 text-purple">
                      Check Live Site <Image src={ArrowSVG} alt="Contact" width={15} height={15}/>
                    </Link>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Projects;
