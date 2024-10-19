import Link from 'next/link'

// This array would typically come from a database or API
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'https://media.licdn.com/dms/image/D4D12AQGlOU6qSRL9zg/article-cover_image-shrink_600_2000/0/1683622584991?e=2147483647&v=beta&t=h9DcJgCQCU_D1ObczXGAeIAp_WuVR3111nRQ0D5pJQM',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '/projects/1',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application built with Next.js and Firebase.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7HLg4xD0WXzi8A97d1gcTi0ZcWu2dW-phg&s',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    link: '/projects/2',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard using React and a third-party weather API.',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/62f108195718231.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    tags: ['React', 'API Integration', 'Chart.js'],
    link: '/projects/3',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A customizable portfolio template built with Next.js and Tailwind CSS.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyET4mUqIp0LlL9lg1IlYq67Eun7UxhwLBPw&s',
    tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
    link: '/projects/4',
  },
]

export default function ProjectsPage() {
  return (
    <div className="mt-10 mb-10 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h1>
        <p className="text-xl text-slate-600 mb-8">Explore some of my recent work and personal projects</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                />
                <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-2">{project.title}</h2>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-sm"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                <Link
                    href={project.link}
                    className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
                >
                    View Project
                </Link>
                </div>
            </div>
            ))}
      </section>

      <section className="text-center bg-slate-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Want to see more?</h2>
        <p className="text-slate-600 mb-6">Check out my GitHub for additional projects and contributions.</p>
        <a
          href="https://github.com/Shahheerr/GIAIC-Assignments"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-slate-800 text-white px-6 py-3 rounded-md hover:bg-slate-700 transition duration-300"
        >
          Visit My GitHub
        </a>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Let's Work Together</h2>
        <p className="text-slate-600 mb-6">Have a project in mind? I'd love to hear about it!</p>
        <Link
          href="/contact"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
