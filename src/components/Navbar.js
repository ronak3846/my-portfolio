// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";


// export default function Navbar() {
//  const currentPath = usePathname();
 

//   return (
//     <>
//       {/* Top navbar for md and above */}
//       <nav className="hidden md:block fixed top-0 left-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-md shadow-md">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           <Link href="/">
//             <h1 className="text-2xl font-bold text-white cursor-pointer">
//               Ronak Vaishnav
//             </h1>
//           </Link>

//           <div className="flex space-x-4 items-center">
//             <NavItem href="/" icon={<FaHome />} label="Home" active={currentPath === "/"} />
//             <NavItem href="/about" icon={<FaUser />} label="About" active={currentPath === "/about"} />
//             <NavItem href="/projects" icon={<FaProjectDiagram />} label="Projects" active={currentPath === "/projects"} />
//             <NavItem href="/contact" icon={<FaEnvelope />} label="Contact" active={currentPath === "/contact"} />
//           </div>
//         </div>
//       </nav>

//       {/* Bottom navbar for mobile */}
//       <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md z-50 bg-black bg-opacity-30 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
//         <div className="flex justify-between items-center">
//           <NavItem href="/" icon={<FaHome />} label="Home" active={currentPath === "/"} />
//           <NavItem href="/about" icon={<FaUser />} label="About" active={currentPath === "/about"} />
//           <NavItem href="/projects" icon={<FaProjectDiagram />} label="Projects" active={currentPath === "/projects"} />
//           <NavItem href="/contact" icon={<FaEnvelope />} label="Contact" active={currentPath === "/contact"} />
//         </div>
//       </nav>
//     </>
//   );

// }

// function NavItem({ href, icon, label, active }) {
//   return (
//     <Link href={href}>
//       <div
//         className={`flex items-center justify-center px-3 py-2 rounded-full cursor-pointer transition
//           ${
//             active
//               ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white space-x-2"
//               : "text-white hover:text-pink-400 hover:shadow-[0_0_10px_2px_rgba(236,72,153,0.6)]"
//           }
//         `}
//       >
//         <span className="text-lg transition-transform duration-300 hover:scale-110">
//           {icon}
//         </span>

//         {/* Show label ONLY if active */}
//         {active && <span className="text-sm">{label}</span>}
//       </div>
//     </Link>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <>
      {/* 🔷 Top Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 cursor-pointer">
              Ronak Vaishnav
            </h1>
          </Link>

          <div className="flex space-x-4 items-center">
            <NavItem
              href="/"
              icon={<FaHome />}
              label="Home"
              active={currentPath === "/"}
            />
            <NavItem
              href="/about"
              icon={<FaUser />}
              label="About"
              active={currentPath === "/about"}
            />
            <NavItem
              href="/projects"
              icon={<FaProjectDiagram />}
              label="Projects"
              active={currentPath === "/projects"}
            />
            <NavItem
              href="/contact"
              icon={<FaEnvelope />}
              label="Contact"
              active={currentPath === "/contact"}
            />
          </div>
        </div>
      </nav>

      {/* 🔷 Bottom Mobile Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md z-50 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
        <div className="flex justify-between items-center">
          <NavItem
            href="/"
            icon={<FaHome />}
            label="Home"
            active={currentPath === "/"}
          />
          <NavItem
            href="/about"
            icon={<FaUser />}
            label="About"
            active={currentPath === "/about"}
          />
          <NavItem
            href="/projects"
            icon={<FaProjectDiagram />}
            label="Projects"
            active={currentPath === "/projects"}
          />
          <NavItem
            href="/contact"
            icon={<FaEnvelope />}
            label="Contact"
            active={currentPath === "/contact"}
          />
        </div>
      </nav>
    </>
  );
}

function NavItem({ href, icon, label, active }) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center justify-center px-3 py-2 rounded-full cursor-pointer transition
          ${
            active
              ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-pink-500/50 space-x-2"
              : "text-white hover:text-pink-400 hover:shadow-[0_0_10px_2px_rgba(236,72,153,0.6)]"
          }
        `}
      >
        <span className="text-lg transition-transform duration-300 hover:scale-110">
          {icon}
        </span>

        {/* 🔷 Show label ONLY if active */}
        {active && <span className="text-sm">{label}</span>}
      </div>
    </Link>
  );
}
