import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import { ProgressBar } from "../components/ProgressBar";
import { FaClock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { LittleDetail } from "../components/LittleDetail";

function Reza() {
  const data = 8;
  return (
    <div>
      <Hero>
        <div className="w-full text-white bg-linear-to-r from-black to-[#293352] flex flex-col p-12">
          <h1 className="text-6xl">BLABLALBALBA</h1>
          <div className="flex flex-row gap-5 pt-20">
            <LittleDetail icon={<FaClock />} detail={`About ${data} Hours`} />
            <LittleDetail icon={<IoPerson />} detail="Nama Instructor" />
            <LittleDetail icon={<IoBook />} detail={`${data} Module`} />
          </div>
        </div>
      </Hero>
    </div>
  );
}

export default Reza;
