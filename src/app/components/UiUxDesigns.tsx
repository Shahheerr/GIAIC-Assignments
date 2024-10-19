import Link from 'next/link'
import Image from 'next/image'

export default function UIUXDesignPage() {
  const designServices = [
    {
      title: "User Research",
      description: "Understanding user behaviors, needs, and motivations through various research methods.",
      icon: "https://cdn-icons-png.flaticon.com/512/2884/2884824.png"
    },
    {
      title: "Information Architecture",
      description: "Organizing and structuring content to create intuitive navigation and user flows.",
      icon: "https://static.thenounproject.com/png/1782397-200.png"
    },
    {
      title: "Wireframing",
      description: "Creating low-fidelity sketches to establish the basic structure of your interfaces.",
      icon: "https://cdn-icons-png.flaticon.com/512/1508/1508907.png"
    },
    {
      title: "Visual Design",
      description: "Crafting visually appealing interfaces that align with your brand identity.",
      icon: "https://cdn-icons-png.flaticon.com/512/4668/4668243.png"
    },
    {
      title: "Prototyping",
      description: "Building interactive prototypes to test and refine user interactions.",
      icon: "https://cdn-icons-png.flaticon.com/512/2644/2644380.png"
    },
    {
      title: "Usability Testing",
      description: "Evaluating designs with real users to ensure optimal user experience.",
      icon: "https://cdn-icons-png.flaticon.com/512/10492/10492888.png"
    }
  ]

  return (
    <div className="mt-10 mb-10 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">UI/UX Design Services</h1>
        <p className="text-xl text-slate-600 mb-8">Creating intuitive and engaging user experiences</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designServices.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={service.icon}
              alt={service.title}
              width={64}
              height={64}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h2>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="bg-slate-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Design Philosophy</h2>
        <div className="space-y-4">
          <p className="text-slate-600">
            We believe that great design is more than just aesthetics. It's about creating 
            intuitive, efficient, and enjoyable experiences for users. Our approach combines:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>User-Centered Design: Putting the user's needs and preferences at the forefront of every decision.</li>
            <li>Iterative Process: Continuously refining and improving designs based on feedback and testing.</li>
            <li>Accessibility: Ensuring our designs are usable by people of all abilities.</li>
            <li>Brand Consistency: Aligning the user interface with your brand identity and values.</li>
            <li>Performance Optimization: Creating designs that not only look good but also perform efficiently.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Why Choose Our UI/UX Design Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Experienced Team</h3>
            <p className="text-slate-600">Our designers have years of experience across various industries and platforms.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Collaborative Approach</h3>
            <p className="text-slate-600">We work closely with you to ensure the final product aligns with your vision.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Data-Driven Decisions</h3>
            <p className="text-slate-600">We use analytics and user testing to inform our design choices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Cutting-Edge Tools</h3>
            <p className="text-slate-600">We utilize the latest design software and prototyping tools for efficient workflows.</p>
          </div>
        </div>
      </section>

      <section className="text-center bg-teal-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your User Experience?</h2>
        <p className="mb-6">Let's create designs that delight your users and drive your business forward.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-teal-500 px-6 py-3 rounded-md hover:bg-slate-100 transition duration-300"
        >
          Start Your Design Project
        </Link>
      </section>
    </div>
  )
}
