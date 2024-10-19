import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="mt-10 mb-10 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 mb-8">Comprehensive solutions for your digital needs</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Web Development</h2>
          <p className="text-slate-600 mb-4">
            From responsive websites to complex web applications, we bring your ideas to life with clean, 
            efficient code and cutting-edge technologies.
          </p>
          <Link 
            href="/services/b-development" 
            className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">UI/UX Design</h2>
          <p className="text-slate-600 mb-4">
            We create intuitive, visually appealing interfaces that enhance user experience and 
            drive engagement across all devices.
          </p>
          <Link 
            href="/services/ux-design" 
            className="inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="text-center bg-slate-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Need a Custom Solution?</h2>
        <p className="text-slate-600 mb-6">
          We offer tailored services to meet your specific project requirements.
        </p>
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
