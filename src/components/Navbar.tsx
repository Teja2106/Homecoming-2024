import { useState } from 'react';
import LogoImage from '../assets/HClogoN.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (event:React.SyntheticEvent, id: string) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const offset = 70; // Adjust this value to match your fixed navbar height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Enable smooth scrolling
      });
    }
    closeMenu(); // Close mobile menu if open
  };

  return (
    <div>
      <header className="bg-white fixed top-0 left-0 right-0 z-10">
        <div className="flex h-16 items-center sm:px-2 lg:px-5">
        <a className="block text-teal-600 mx-8 h-[50px] w-auto" href="#">
  <img className="h-full object-contain" src={LogoImage} alt="Logo" />
</a>

          <div className="flex flex-1 px-8 items-center justify-start md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex  items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-gray-500 transition hover:underline hover:text-gray-500/75"
                    href="#about"
                    onClick={(e) => handleScroll(e, 'about')}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:underline hover:text-gray-500/75"
                    href="#events"
                    onClick={(e) => handleScroll(e, 'events')}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:underline hover:text-gray-500/75"
                    href="#gallery"
                    onClick={(e) => handleScroll(e, 'gallery')}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:underline hover:text-gray-500/75"
                    href="#merch"
                    onClick={(e) => handleScroll(e, 'merch')}
                  >
                    Merch
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:underline hover:text-gray-500/75"
                    href="#guidelines"
                    onClick={(e) => handleScroll(e, 'guidelines')}
                  >
                    Guidelines
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:underline hover:text-gray-500/75"
                    href="#footer"
                    onClick={(e) => handleScroll(e, 'footer')}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <a
                className="block rounded-full bg-[#007069] px-5 py-1 font-medium text-white transition hover:bg-teal-700"
                href="https://www.alumni.gitam.edu/events/event/456379.dz"
                target="_blank"
              >
                RSVP
              </a>
              <button
                className="block rounded bg-gray-00 p-2.5 text-black transition hover:text-gray-600/75 md:hidden"
                onClick={toggleMenu}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 w-64 bg-white h-full z-20 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 text-lg pt-24">
          <li>
            <a className="text-gray-500" href="#about" onClick={(e) => handleScroll(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a className="text-gray-500" href="#events" onClick={(e) => handleScroll(e, 'events')}>
              Events
            </a>
          </li>
          <li>
            <a className="text-gray-500" href="#gallery" onClick={(e) => handleScroll(e, 'gallery')}>
              Gallery
            </a>
          </li>
          <li>
            <a className="text-gray-500" href="#merch" onClick={(e) => handleScroll(e, 'merch')}>
              Merch
            </a>
          </li>
          <li>
            <a className="text-gray-500" href="#guidelines" onClick={(e) => handleScroll(e, 'guidelines')}>
              Guidelines
            </a>
          </li>
          <li>
            <a className="text-gray-500" href="#team" onClick={(e) => handleScroll(e, 'team')}>
              Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
