import { inter, playFairDisplay } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const page = () => {
  return (
    <main className='screen-container flex h-[calc(100vh-100px)] flex-col items-center justify-center gap-[86px] px-4 text-center '>
      <h1
        className={`${playFairDisplay.className} text-[85px] font-[600] max-md:text-[40px] max-md:font-[500]`}
      >
        Improve your skills with <br /> Medi
        <span className='text-primary-green'>Q</span>uest
      </h1>
      <p className='w-full max-w-[700px] max-md:text-[13px]'>
        we are small team that aims to end your problems in searching for what
        concerns you by providing a large amount of tools that will make you
        advance in your future studies
      </p>
      <Link
        href='/'
        className={`${inter.className} flex items-center gap-[10px] rounded-md bg-primary-green px-[45px] py-5 text-[20px] text-[#161616] duration-500 hover:scale-110 hover:bg-white hover:text-primary-green max-md:px-[27px] max-md:py-3 max-md:text-[12px]`}
      >
        START LEARNING{" "}
        <GoArrowRight className='text-[45px] max-md:text-[20px]' />
      </Link>
      <Image
        src='/home-bg.png'
        className='-z-[100] brightness-[25%]'
        fill
        alt='home screen backgorund'
      />
    </main>
  );
};

export default page;

// font-size: 12px;
// font-weight: 500;
