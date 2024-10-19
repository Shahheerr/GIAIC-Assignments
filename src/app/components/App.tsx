import Image from 'next/image'
import Link from 'next/link'

export default function App() {
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
      ]
  return (
    <div className="mt-10 mb-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-slate-600 mb-8">Crafting digital experiences with passion and precision</p>
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          alt="Rana Shaheer"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-8"
        />
        <Link
          href="/contact"
          className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300"
        >
          Get in Touch
        </Link>
      </section>

      {/* About Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">About Me</h2>
        <p className="text-slate-600 mb-4">
          Hello! I'm a passionate web developer with expertise in creating responsive and user-friendly websites. 
          With a strong foundation in modern web technologies, I strive to build digital solutions that not only 
          look great but also provide exceptional user experiences.
        </p>
        <Link href="/about" className="text-teal-500 hover:underline">Learn more about my journey</Link>
      </section>

      {/* Latest Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="inline-block border-2 border-teal-500 text-teal-500 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-white transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'MongoDB', 'AWS'].map((skill) => (
            <div key={skill} className="bg-slate-100 rounded-md p-3 text-center">
              <span className="text-slate-700">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-teal-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6">Let's collaborate and bring your ideas to life!</p>
        <Link
          href="/contact"
          className="bg-white text-teal-500 px-6 py-3 rounded-md hover:bg-slate-100 transition duration-300"
        >
          Contact Me
        </Link>
      </section>
    </div>
  )
}
