function Rehan() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <CourseContent />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#293352] text-white h-screen w-screen text-center p-5">
      <h1>Introduction to React JS</h1>
      <SidebarSection />
      <SidebarSection />
    </div>
  );
}

function SidebarSection() {
  return (
    <div className="text-justify p-10 flex flex-col w-full">
      <h2>CONTENT OVERVIEW</h2>
      <label className="flex justify-between">
        🌇 Welcome!
        <input type="checkbox" />
      </label>{" "}
      {/* nanti diisi mapping dari data*/}
      <label className="flex justify-between">
        👌 Introduction
        <input type="checkbox" />
      </label>
      <label className="flex justify-between">
        🐟 What will we learn
        <input type="checkbox" />
      </label>
      {/* <ul>
        MODULE 1: WHAT IS REACT JS
        <li>🪱 What is React?</li>
        <li>🤑 Useful Source</li>
        <li>💰 Documentation</li>
        <li>💼 Setting Up</li>
        <li>📘Let's Go!</li>
        <li>👯Lorem ipsum</li>
      </ul> */}
    </div>
  );
}

function CourseContent() {
  return (
    <div className="p-15">
      <div className="flex justify-between mb-15">
        <p>Lesson 69 of 420</p>
        <button>EXIT COURSE</button>
      </div>
      <div className="bg-[#293352] text-white p-15">
        <h1 className="text-center mb-20">Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, aliquid ratione? Provident blanditiis quibusdam quo sequi, ipsam excepturi amet vel nemo illum explicabo sed expedita voluptatum impedit autem laborum quis facere
          doloribus deleniti, quae reprehenderit reiciendis. Nam consequatur ipsum eveniet deleniti ut saepe laudantium fuga dicta illum, voluptate sequi obcaecati distinctio ullam expedita iure eius explicabo labore error nemo. Adipisci
          laborum maiores quo inventore similique? Nemo aperiam aspernatur vel nihil ipsam esse recusandae, praesentium mollitia necessitatibus itaque quia doloribus saepe omnis neque. Magni sed commodi debitis aliquam dolorum nihil
          repellendus expedita dignissimos! Nihil voluptatem voluptate esse! Laboriosam adipisci assumenda vel quod beatae nobis commodi temporibus veniam.
        </p>
      </div>
    </div>
  );
}

export default Rehan;
