import Link from 'next/link'

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: './projects' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      subItems: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold text-teal-400">Portfolio</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.href} className="hover:text-teal-400 transition duration-300">
                  {item.name}
                </Link>
                {item.subItems && (
                  <ul className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link href={subItem.href} className="block px-4 py-2 hover:bg-slate-700 hover:text-teal-400 transition duration-300">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}