export default function Home({ setCurrent }) {
    return (
      <main className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Bienvenido a PadelzoneApp 🏟️</h1>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📅 Planilla Semanal</h2>
          <p className="text-base mb-2">Accedé al cronograma de turnos del equipo, actualizado por semana.</p>
          <button
            onClick={() => setCurrent("Planilla")}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
          >
            Ver Planilla
          </button>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📋 Tareas por Sector</h2>
          <p className="text-base mb-2">Consultá las responsabilidades y tareas asignadas en cada área del club.</p>
          <button
            onClick={() => setCurrent("Tareas")}
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow"
          >
            Ver Tareas
          </button>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">📖 Manuales del Club</h2>
          <p className="text-base mb-2">Guías detalladas para ingreso, cierre y manejo de sectores del club.</p>
          <button
            onClick={() => setCurrent("Manuales")}
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl shadow"
          >
            Ver Manuales
          </button>
        </section>
      </main>
    );
  }
  