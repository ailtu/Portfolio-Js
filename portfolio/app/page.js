import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl italic font-bold">O que deseja fazer?</h1>
      <div className="flex flex-col items-center gap-4">
        <Link href="/experienciaacademica">
          <button className="w-70 h-16 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-950">Experiência Acadêmica</button>
        </Link>
        <Link href="/experienciaprofissional">
          <button className="w-70 h-16 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-950">Experiência Profissional</button>
        </Link>
        <Link href="/projetosdesenvolvidos">
          <button className="w-70 h-16 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-950">Projetos Desenvolvidos</button>
        </Link>
        <Link href="/jogo">
          <button className="w-70 h-16 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-950">Bulls n' Cows</button>
        </Link>
        <Link href="/sobre">
          <button className="w-70 h-16 bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-950">Sobre o Projeto</button>
        </Link>
      </div>
    </main>
  );
}