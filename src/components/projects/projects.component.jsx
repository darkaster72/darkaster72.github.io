import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const projects = [
    {
      title: "IOU",
      description: "A Flutter app to manage who you owe or are owed.",
    },
    { title: "Kanri", description: "A Project Management Tool." },
    { title: "Expensr", description: "A Flutter app to manage your expenses." },
  ];
  return (
    <section
      id="projects"
      className="h-screen flex flex-col  w-full bg-zinc-800 lg:px-32 px-4 pt-16"
    >
      <h1 className="font-bold text-6xl w-fit text-white">Projects</h1>
      <div className="grid md:grid-cols-3 gap-x-4 gap-y-2 mt-8 place-items-stretch">
        {projects.map(({ title, description }) => (
          <div
            key={title}
            className="max-w-sm rounded-lg flex  justify-between border shadow-md bg-gray-800 border-gray-700"
          >
            {/* <div className="flex-1 bg-white"></div> */}
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-400">{description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-x-2 py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Read more
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
