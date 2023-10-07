import Image from "next/image";
import Background2 from "../../public/img/messi2.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={Background2}
          alt="background image"
         fill
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-[80px] font-light text-white ">The GOAT</h1>
        <Link href="messi/early_life" className="text-white text-[30px] mt-12">
          Early Life
        </Link>
        <Link href="messi/achievements" className="text-white text-[30px]">
          Stats
        </Link>
        <Link href="messi/silverware" className="text-white text-[30px]">
          Silverware
        </Link>
      </div>
      <div></div>
    </div>
  );
}