import Link from 'next/link';

export default function Sobre() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto </h1>
      <p font-bold> Esse projeto foi desenvolvido utilizando Frameworks e ferramentas do Javascript: </p>
      <li>Next.js</li>
      <li>React</li>
      <li>TailWind CSS.</li>
      <br></br>
      <p>Essas ferramentas nos dão uma gama de opções para edição nas construção do software,</p>
      <p>são muitos detalhes para aprender e já saber logo de cara o que usar,</p>
      <p>com frequência eu confundia um 'w-'que seria para comprimento com o 'h-' que é para altura. </p>
      <p>No mais, segue sendo uma ferramenta muito rica de conteúdo!</p>
      <div className="fixed bottom-4 left-0 w-full flex justify-center">
        <div className="fixed bottom-4 left-0 w-full flex justify-center">
          <Link href="/">
            <button className="bg-gray-600 text-white px-6 py-3 rounded shadow-lg hover:bg-gray-700 transition">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}