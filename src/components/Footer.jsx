export default function Footer() {
  return (
    <footer className="bg-[#1E1E2F] text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">LMSCourse</h2>
          <p className="text-gray-400 text-sm">
            Learn React, Frontend, dan Web Development.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Courses</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                All Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Free Courses
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Instructors</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="/instructors" className="hover:text-white">
                Meet Our Instructors
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Want To Ask a Question?</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your Question"
              className="p-2 rounded-md w-48 border border-white/50 text-white"
            />
            <button className="bg-blue-600 px-4 rounded-md hover:bg-blue-500">
              Send
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 LMSCourse. Created by Reza, Hudha, & Raihan.
      </p>
    </footer>
  );
}
