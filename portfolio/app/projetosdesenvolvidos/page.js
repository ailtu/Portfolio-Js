import Link from 'next/link';

export default function Projetos() {
    return (
        <main className="p-8 pb-20">
            <h1 className="text-3xl font-bold mb-4">Projetos Desenvolvidos</h1>

            <p className="mb-6">
                Esses são alguns projetos que desensolvi enquanto estudante no curso Sistemas para Internet e Ciência da Computação,<br></br>
                e também em projetos pessoais desenvolvido para terceiros.</p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8">

                <div className="w-full h-40 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#f2ead7' }}>
                    <img src="/miaudote.jpg" alt="Ferramenta 1" className="w-full h-40 object-contain" />
                </div>
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#D9D9D9' }}>
                    <img src="/alerta-urbano.jpg" alt="Ferramenta 1" className="w-full h-40 object-contain" />
                </div>
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#ffffff' }}>
                    <img src="/feito-aqui.jpg" alt="Ferramenta 1" className="w-full h-40 object-contain" />
                </div>
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
                    <img src="/infrabyte.png" alt="Ferramenta 1" className="w-full h-40 object-contain" />
                </div>
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#f4ede3' }}>
                    <img src="/mico.jpg" alt="Ferramenta 1" className="w-full h-40 object-contain" />
                </div>
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: '#061129' }}>
                    <img src="/rapquizz.jpg" alt="Ferramenta 1" className="w-full h-40 object-contain" />
                </div>
            </div>

            <div className="flex justify-center mb-8">
                <a
                    href="https://github.com/ailtu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                        Você pode ver mais projetos no meu Github!
                    </button>
                </a>
            </div>

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
