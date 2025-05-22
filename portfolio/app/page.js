import Link from 'next/link';

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl italic font-bold"> O que deseja fazer?</h1>
      <div className="flex flex-col items-center gap-4">
        <Link href="/experienciaAcademica">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Minha Experiência Acadêmica</button>
        </Link>
        <Link href="/experienciaProfissional">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Minha Experiência Profissional</button>
        </Link>
        <Link href="sobre">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Sobre o Projeto</button>
        </Link>
      </div>
    </main>
  );
}

/* precisa ajustar a troca de telas. 
telas criadas mas mudanca não estão funcionando
*/