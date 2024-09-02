import Button from "../elements/Button";
import Image from "next/image";
import ArrowSVG from "@/public/arrow.svg";
import footerGrid from "@/public/footer-grid.svg";
import { socialMedia } from "@/data";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black-100 relative py-0 pt-16 overflow-hidden">
      <div className="container">
        <div className="size-full absolute top-0 md:-top-1/2 left-0 z-5">
          <Image
            src={footerGrid}
            alt="grid"
            width={1500}
            height={1500}
            className="object-cover scale-125 lg:scale-100"
          />
        </div>
        <div className="flex flex-col items-stretch md:items-center justify-start gap-8 mb-12 lg:mb-24 text-white z-10 w-full h-fit relative">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to take <span className="text-purple">your</span> digital{" "}
              <br /> presence to the next level?
            </h2>
            <p className="text-base text-blue-100">
              Reach out to me today and let&apos;s discuss how i can help you
              achieve your goals.
            </p>
          </div>
          <Link href="#projects" className="flex items-stretch justify-center">
            <Button
              position="right"
              icon={
                <Image src={ArrowSVG} alt="Contact" width={10} height={10} />
              }
            >
              Contact Me Now
            </Button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 w-full gap-8 relative z-10">
          <p className="text-base text-blue-100">
            Copyifght &copy;2024 <Link href="www.linkedin.com/in/frontend-ammar-yasser">Ammar Yasser</Link>
          </p>
          <div className="flex flex-row gap-4">
            {socialMedia.map(({ id, img }) => (
              <Link
                href="www.linkedin.com/in/frontend-ammar-yasser"
                key={id}
                className="p-2 rounded-lg border border-white/[0.1] bg-black-200"
              >
                <Image src={img} alt={img} width={15} height={15} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
