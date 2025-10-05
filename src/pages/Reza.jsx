import { ProgressBar } from "../components/ProgressBar";

function Reza() {
  return (
    <div>
      <CourseHero />
      <Middle />
    </div>
  );
}

function CourseHero() {
  return (
    <div className="w-full text-white bg-linear-to-r from-black to-[#293352] flex flex-col p-12">
      <h1 className="text-6xl">BLABLALBALBA</h1>
      <div className="flex flex-row gap-5 pt-20">
        <h1>awodnawodnwao</h1>
        <h1>awodnawodnwao</h1>
        <h1>awodnawodnwao</h1>
      </div>
    </div>
  );
}

function Middle() {
  return (
    <div className="p-10 flex flex-col bg-gray-200">
      <h1>WOOOOOOOOOOOOOOO</h1>
      <h1>WOOOOOOOOOOOOOOO</h1>
      <ProgressBar />
    </div>
  );
}

export default Reza;
