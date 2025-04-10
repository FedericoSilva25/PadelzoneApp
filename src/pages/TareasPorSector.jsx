export default function TareasPorSector() {
    const sectores = [
      {
        nombre: "Caja Principal",
        descripcion: "Encargada de cobrar, coordinar turnos, controlar flujo de caja y cierre diario. Responsable del ingreso de todos los turnos del día."
      },
      {
        nombre: "Barra Satélite",
        descripcion: "Atención al cliente en barra del sector pádel. Venta de bebidas, snacks, control de stock y limpieza del área."
      },
      {
        nombre: "Ala 1",
        descripcion: "Atención a los clientes en mesas y quinchos del ala 1. Toma de pedidos, entrega y limpieza."
      },
      {
        nombre: "Ala 2",
        descripcion: "Atención a los clientes en mesas y quinchos del ala 2. Toma de pedidos, entrega y limpieza."
      },
    ]
  
    return (
      <main className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">📋 Tareas por Sector</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectores.map((sector, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-4 border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold mb-2">{sector.nombre}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{sector.descripcion}</p>
            </div>
          ))}
        </div>
      </main>
    )
  }
  