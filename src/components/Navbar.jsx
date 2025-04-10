import { useState } from 'react'

const NavLink = ({ label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 
      ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-blue-100'}`}
  >
    {label}
  </button>
)

export default function Navbar({ current, setCurrent }) {
  const links = ["Inicio", "Planilla", "Tareas", "Manuales"]
  return (
    <nav className="bg-white shadow-md p-4 flex gap-4 justify-center sticky top-0 z-50">
      {links.map((link) => (
        <NavLink
          key={link}
          label={link}
          onClick={() => setCurrent(link)}
          active={current === link}
        />
      ))}
    </nav>
  )
}
