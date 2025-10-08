import { useParams, Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { Hero } from "../components/Hero";

function InstructorModule() {
  const { id } = useParams();
  const { instructors, courses } = useData();

  if (!instructors || !courses) return <p>Loading...</p>;

  const instructor = instructors.find((ins) => String(ins.id) === String(id));
  if (!instructor) return <p>Loading...</p>;

  return (
    <>
      <InstructorProfile instructor={instructor} />
      <InstructorCourses instructor={instructor} courses={courses} />
    </>
  );
}

function InstructorCourses({ instructor, courses }) {
  // filter courses berdasarkan instructorId (bukan modules)
  const instructorCourses = courses.filter(
    (c) => String(c.instructorId) === String(instructor.id)
  );

  if (!instructorCourses || instructorCourses.length === 0) {
    return (
      <div className="w-full bg-gray-50 text-center py-10 text-gray-600">
        <p>{instructor.name} belum memiliki course.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-12 px-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Courses by {instructor.name}
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {instructorCourses.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {course.title}
            </h3>
            <p className="text-gray-500 text-sm flex-grow">
              {course.description ?? course.short_description ?? ""}
            </p>
            <div className="mt-3 text-blue-600 font-medium">
              {course.category || "General"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function InstructorProfile({ instructor }) {
  return (
    <Hero>
      <div className="flex flex-row gap-10 p-8">
        <div className="flex-shrink-0">
          <img
            src={instructor.avatar}
            alt={instructor.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-4xl font-bold text-white">{instructor.name}</h1>
          <p className="text-sm text-white/50">{instructor.title}</p>
          <p className="text-lg text-gray-100 leading-relaxed">
            {instructor.bio || "No description available."}
          </p>

          <div className="flex gap-4 mt-3 text-blue-200">
            {instructor.social?.twitter && (
              <a
                href={`https://twitter.com/${instructor.social.twitter}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            )}
            {instructor.social?.linkedin && (
              <a
                href={`https://linkedin.com/in/${instructor.social.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default InstructorModule;
