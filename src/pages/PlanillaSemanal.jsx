export default function PlanillaSemanal() {
    return (
      <main className="p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">🗓️ Planilla Semanal - Lunes a Viernes</h1>
        <table className="w-full mb-10 text-left border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border">Día</th>
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Horario Entrada</th>
              <th className="p-2 border">Tarea</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Lunes", "Ceci", "16:00", "Caja Principal"],
              ["Lunes", "Joel", "16:30", "Ala 1"],
              ["Lunes", "Nahir", "18:00", "Barra Satélite"],
              ["Lunes", "Débora", "18:00", "Ala 2"],
              ["Lunes", "RoMicola", "18:00", "Ala 1"],
              ["Martes", "Ceci", "16:00", "Caja Principal"],
              ["Martes", "Nahir", "16:30", "Barra Satélite"],
              ["Martes", "Joel", "18:00", "Ala 1"],
              ["Martes", "Débora", "18:00", "Ala 2"],
              ["Martes", "RoMicola", "18:00", "Ala 1"],
              ["Miércoles", "Ceci", "16:00", "Caja Principal"],
              ["Miércoles", "RoMicola", "16:30", "Ala 1"],
              ["Miércoles", "Nahir", "18:00", "Barra Satélite"],
              ["Miércoles", "Débora", "18:00", "Ala 2"],
              ["Miércoles", "Joel", "18:00", "Ala 1"],
              ["Jueves", "Ceci", "16:00", "Caja Principal"],
              ["Jueves", "Débora", "16:30", "Ala 2"],
              ["Jueves", "Nahir", "18:00", "Barra Satélite"],
              ["Jueves", "Joel", "18:00", "Ala 1"],
              ["Jueves", "RoMicola", "18:00", "Ala 1"],
              ["Viernes", "Ceci", "16:00", "Caja Principal"],
              ["Viernes", "Joel", "16:30", "Ala 1"],
              ["Viernes", "Nahir", "18:00", "Barra Satélite"],
              ["Viernes", "Débora", "18:00", "Ala 2"],
              ["Viernes", "RoMicola", "18:00", "Ala 1"],
            ].map(([dia, nombre, hora, tarea], i) => (
              <tr key={i} className="even:bg-gray-100">
                <td className="p-2 border">{dia}</td>
                <td className="p-2 border">{nombre}</td>
                <td className="p-2 border">{hora}</td>
                <td className="p-2 border">{tarea}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <h2 className="text-2xl font-bold mb-4">🧾 Planilla Fin de Semana</h2>
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-100">
            <tr>
              <th className="p-2 border">Día</th>
              <th className="p-2 border">Turno</th>
              <th className="p-2 border">Nombre</th>
              <th className="p-2 border">Horario Entrada</th>
              <th className="p-2 border">Tarea</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Sábado", "Mañana", "Fede", "08:00", "Caja Principal"],
              ["Sábado", "Mañana", "Rocío G.", "08:00", "Ala 1"],
              ["Sábado", "Tarde", "Anto", "16:00", "Ala 2"],
              ["Sábado", "Tarde", "Débora", "16:00", "Ala 1"],
              ["Sábado", "Tarde", "Abril", "16:00", "Barra Satélite"],
              ["Domingo", "Mañana", "Nahir", "08:00", "Barra Satélite"],
              ["Domingo", "Mañana", "RoMicola", "08:00", "Ala 1"],
              ["Domingo", "Tarde", "Ceci", "16:00", "Caja Principal"],
              ["Domingo", "Tarde", "Joel", "16:00", "Ala 1"],
              ["Domingo", "Tarde", "Samuel", "16:00", "Barra Satélite"],
            ].map(([dia, turno, nombre, hora, tarea], i) => (
              <tr key={i} className="even:bg-gray-100">
                <td className="p-2 border">{dia}</td>
                <td className="p-2 border">{turno}</td>
                <td className="p-2 border">{nombre}</td>
                <td className="p-2 border">{hora}</td>
                <td className="p-2 border">{tarea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    )
  }
  