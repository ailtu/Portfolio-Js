import Link from 'next/link';

export default function Sobre() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">sobre mim</h1>
      <p className="mb-6">
      Falar sobre mim aqui  
      </p>

      <Link href="/">
        <button className="mt-6 bg-gray-600 text-white px-4 py-2 rounded">Voltar</button>
      </Link>
    </main>
  );
}