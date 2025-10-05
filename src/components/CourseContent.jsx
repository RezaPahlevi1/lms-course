export function CourseContent({ activeModule, setActiveModule, modules }) {
  if (!activeModule) return <p>Loading...</p>; // handle saat module belum terisi

  const currentIndex = modules.findIndex((m) => m.id === activeModule.id);

  const handleNext = () => {
    if (currentIndex < modules.length - 1) {
      setActiveModule(modules[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveModule(modules[currentIndex - 1]);
    }
  };

  console.log(modules.length);

  return (
    <div className="p-15">
      <div className="flex justify-between mb-15">
        <p>Lesson 69 of 420</p>
        <button className="bg-[#A51C30] text-white rounded p-2">EXIT COURSE</button>
      </div>
      <div className="bg-[#293352] text-white p-15 rounded-md w-350">
        <h1 className="text-center mb-20">{activeModule.title}</h1>
        {activeModule.type === "video" && <video src={activeModule.content.video_url} controls className="w-full mt-5" />}
        {activeModule.type === "article" && <div dangerouslySetInnerHTML={{ __html: activeModule.content.html }} />}
        {activeModule.type === "project" && <p>{activeModule.content.instructions}</p>}
      </div>
      <div className="flex justify-between mt-15">
        <button className="bg-[#A51C30] text-white rounded p-2" onClick={handlePrevious}>
          Previous
        </button>
        <button className="bg-[#A51C30] text-white rounded p-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
