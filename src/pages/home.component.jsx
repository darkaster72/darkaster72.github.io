import "./home.styles.css";

const PROJECTS = [
  {
    title: "Expensr",
    description: "A simple flutter expense tracker app",
    url: "https://github.com/darkaster72/expensr",
  },
  {
    title: "iou",
    description: "A flutter app to keep track of your debts",
    url: "https://github.com/darkaster72/iou",
  },
];

const LINKS = [
  { title: "Projects", url: "#projects" },
  { title: "Skills", url: "#skills" },
  { title: "Contact", url: "#contacts" },
];

const SKILLS = [
  {
    title: "Backend Technologies",
    items: ["Java", "Spring Boot", "MySQL", "Postgres", "MongoDB"],
  },
  {
    title: "Frontend Technologies",
    items: ["Next.js", "React", "Angular", "Flutter", "HTML", "CSS", "JS/TS"],
  },
  {
    title: "Cloud Technologies",
    items: ["AWS EC2", "AWS Lambda", "AWS Amplify"],
  },
];

const CONTACTS = [
  { title: "email", url: "mailto:sankit72@gmail.com" },
  { title: "github", url: "https://github.com/darkaster72" },
  { title: "linkedin", url: "https://www.linkedin.com/in/ankit72" },
];

const HomePage = () => (
  <div className="min-h-screen bg-gray-100 md:py-6 justify-center py-12 bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500">
    <div className="py-3 lg:mx-32 mx-4">
      <div
        className="flex p-8 md:p-16 lg:p-20 bg-white shadow-lg rounded-3xl bg-clip-padding bg-opacity-25 font-sans text-title shadow-text"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="flex w-full h-full">
          <div className="hidden md:flex flex-shrink-0 flex-col gap-6 pr-8 font-semibold">
            {LINKS.map((link) => (
              <a
                key={link.url}
                href={link.url}
                rel="noreferrer"
                className="hover:text-white hover:underline transition-all duration-500"
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex flex-1 md:border-l border-gray-300 border-opacity-40">
            <div className="max-w-full px-8">
              <div className="">
                <div className="font-black text-7xl">ankit sharma</div>
                <div className="text-3xl my-2">Full Stack Java Developer</div>
                <hr className="px-4 text-gray-700 opacity-40" />
              </div>
              <div className="mt-4 text-2xl">
                A guy passionate about creating better shit! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Vero beatae ducimus
                asperior
              </div>
              <section className="mt-16" id="projects">
                <div className="text-3xl font-thin">Projects</div>
                <div className="flex flex-col gap-4 mt-4 pl-2">
                  {PROJECTS.map((project) => (
                    <div className="flex flex-col gap-2" key={project.url}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-4xl font-bold hover:underline underline-offset-2 transition-all duration-500"
                      >
                        {project.title}
                      </a>
                      <div className="text-xl">{project.description}</div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-16" id="skills">
                <div className="text-3xl font-thin">Skills</div>
                <div className="flex flex-col gap-6 mt-4 pl-2">
                  {SKILLS.map((skill) => (
                    <div className="flex flex-col gap-4" key={skill.title}>
                      <div className="text-2xl font-medium">{skill.title}</div>
                      <div className="flex gap-1 text-2xl font-thin comma-seperate list-none">
                        {skill.items.map((item) => (
                          <li key={item} className="">
                            {item}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-16" id="contacts">
                <div className="text-3xl font-thin">Contacts</div>
                <div className="flex flex-col gap-4 mt-4 pl-2">
                  {CONTACTS.map((contact) => (
                    <a
                      className="flex flex-col gap-2 text-4xl hover:text-white transition-all duration-300 hover:underline"
                      key={contact.title}
                      href={contact.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contact.title}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
