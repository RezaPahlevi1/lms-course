import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

function Instructors() {
  const { id } = useParams();
  const { instructors } = useData();
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-8">Meet Our Instructors</h1>

      <div className="grid grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigate(`/instructors/${instructor.id}`)}
          >
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{instructor.name}</h2>
            <p className="text-sm text-gray-500">{instructor.title}</p>
            <p className="text-center text-gray-600 mt-2 text-sm">
              {instructor.bio}
            </p>

            <div className="flex gap-4 mt-3 text-blue-500">
              <a
                href={`https://twitter.com/${instructor.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
              <a
                href={`https://linkedin.com/in/${instructor.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
