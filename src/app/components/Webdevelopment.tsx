import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function WebDevelopmentPage() {
  const services = [
    "Custom Website Development",
    "E-commerce Solutions",
    "Content Management Systems (CMS)",
    "Progressive Web Applications (PWA)",
    "API Development and Integration",
    "Website Maintenance and Support"
  ]

  return (
    <div className="mt-10 mb-10 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Web Development Services</h1>
        <p className="text-xl text-slate-600 mb-8">Building robust, scalable, and efficient web solutions</p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Expertise</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-slate-600">{service}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Our Development Process</h2>
        <ol className="space-y-4">
          <li className="flex">
            <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
            <div>
              <h3 className="font-semibold text-slate-800">Requirements Gathering</h3>
              <p className="text-slate-600">We start by understanding your business needs and project requirements.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
            <div>
              <h3 className="font-semibold text-slate-800">Planning and Design</h3>
              <p className="text-slate-600">Our team creates a detailed project plan and design mockups.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
            <div>
              <h3 className="font-semibold text-slate-800">Development</h3>
              <p className="text-slate-600">We build your solution using the latest technologies and best practices.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
            <div>
              <h3 className="font-semibold text-slate-800">Testing and Quality Assurance</h3>
              <p className="text-slate-600">Rigorous testing ensures your project meets the highest quality standards.</p>
            </div>
          </li>
          <li className="flex">
            <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
            <div>
              <h3 className="font-semibold text-slate-800">Deployment and Support</h3>
              <p className="text-slate-600">We launch your project and provide ongoing support and maintenance.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="text-center bg-teal-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Project?</h2>
        <p className="mb-6">Let's discuss how we can bring your vision to life.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-teal-500 px-6 py-3 rounded-md hover:bg-slate-100 transition duration-300"
        >
          Get a Free Consultation
        </Link>
      </section>
    </div>
  )
}