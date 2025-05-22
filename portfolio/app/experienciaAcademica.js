import Link from 'next/link';

export default function ExperienciaAcademica() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Expe academica</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>exp aqui</li>
      </ul>

      <Link href="/">
        <button className="mt-6 bg-gray-600 text-white px-4 py-2 rounded">Voltar</button>
      </Link>
    </main>
  );
}