export default function ManualesDelClub() {
    const manuales = [
      {
        titulo: "Ingreso al Club",
        descripcion: "Paso a paso para abrir el club correctamente y preparar cada sector.",
        link: "#" // Reemplazar por enlace a PDF cuando esté disponible
      },
      {
        titulo: "Cierre del Club",
        descripcion: "Instrucciones para cierre de caja, limpieza, y control de stock al final del día.",
        link: "#"
      },
      {
        titulo: "Manejo de Caja",
        descripcion: "Todo lo que necesitás saber para operar correctamente la caja principal y barra satélite.",
        link: "#"
      },
      {
        titulo: "Atención al Cliente",
        descripcion: "Guía de buenas prácticas para brindar una excelente experiencia al cliente.",
        link: "#"
      },
    ]
  
    return (
      <main className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">📖 Manuales del Club</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manuales.map((manual, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4 border-l-4 border-purple-500">
              <h2 className="text-lg font-semibold mb-1">{manual.titulo}</h2>
              <p className="text-sm text-gray-700 mb-3">{manual.descripcion}</p>
              <a
                href={manual.link}
                target="_blank"
                className="inline-block text-sm text-purple-700 hover:underline"
              >
                Ver manual
              </a>
            </div>
          ))}
        </div>
      </main>
    )
  }
  