import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="mt-10 mb-10 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
        <p className="text-xl text-slate-600 mb-8">Get to know the person behind the code</p>
        <img
          src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          alt="Rana Shaheer"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-8"
        />
      </section>

      {/* Introduction Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Hello, I'm Rana Shaheer</h2>
        <p className="text-slate-600 mb-4">
          I'm a passionate web developer with 5 years of experience in creating responsive and user-friendly websites. 
          My journey in web development started when I built my first HTML page in college, and since then, 
          I've been constantly learning and evolving with the ever-changing landscape of web technologies.
        </p>
        <p className="text-slate-600 mb-4">
          When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the kitchen, 
          or volunteering at local tech meetups to help aspiring developers kickstart their careers.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Git', 'AWS', 'Docker'].map((skill) => (
            <div key={skill} className="bg-white rounded-md p-3 text-center shadow">
              <span className="text-slate-700">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Professional Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Senior Frontend Developer</h3>
            <p className="text-slate-600">TechCorp Inc. | 2020 - Present</p>
            <ul className="list-disc list-inside text-slate-600 mt-2">
              <li>Lead a team of 5 developers in building and maintaining large-scale web applications</li>
              <li>Implemented modern frontend architectures using React and Next.js, improving performance by 40%</li>
              <li>Mentored junior developers and conducted code reviews to ensure high-quality deliverables</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Full Stack Developer</h3>
            <p className="text-slate-600">WebSolutions Co. | 2018 - 2020</p>
            <ul className="list-disc list-inside text-slate-600 mt-2">
              <li>Developed and maintained multiple client websites using the MERN stack</li>
              <li>Collaborated with UX designers to implement responsive and accessible web designs</li>
              <li>Optimized database queries and API endpoints, reducing load times by 30%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-slate-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Education</h2>
        <div>
          <h3 className="text-xl font-semibold text-slate-800">Bachelor of Science in Computer Science</h3>
          <p className="text-slate-600">University of Technology | Graduated 2018</p>
          <p className="text-slate-600 mt-2">
            Relevant coursework: Data Structures, Algorithms, Web Development, Database Management Systems
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Certifications</h2>
        <ul className="list-disc list-inside text-slate-600">
          <li>AWS Certified Developer - Associate</li>
          <li>MongoDB Certified Developer</li>
          <li>Google Analytics Individual Qualification</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-teal-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="mb-6">Interested in collaborating or have a project in mind?</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-teal-500 px-6 py-3 rounded-md hover:bg-slate-100 transition duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}