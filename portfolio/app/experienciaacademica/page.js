import Link from 'next/link';

export default function ExperienciaAcademica() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Experiência Acadêmica</h1>
      <ul className="list-disc pl-6 space-y-2">
        <p><b>Ciência da Computação</b></p>
        <li>Universidade Católica de Pernambuco</li>
        <li>Inicio: 08/2020 / Finalizaria em 2024.2</li>
        <li>Curso Trancado.</li>
        <li>Turno: Manhã</li>
        <br></br>
        <p><b>Sistemas para Internet</b></p>
        <li>Universidade Católica de Pernambuco</li>
        <li>Inicio: 08/2024 / Expectativa de finalizar em 2026.2</li>
        <li>Em curso...</li>
        <li>Turno: Noite</li>
      </ul>
      <div className="fixed bottom-4 left-0 w-full flex justify-center">
        <Link href="/">
          <button className="bg-gray-600 text-white px-6 py-3 rounded shadow-lg hover:bg-gray-700 transition">
            Voltar
          </button>
        </Link>
      </div>
    </main>
  );
}