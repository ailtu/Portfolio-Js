import Link from 'next/link';

export default function Jogo() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
                Infelizmente não consegui fazer o jogo aqui, como dito no inicio do período,<br></br>
                aprendi muita coisa sobre JS na aula, na internet e nos cursos que adquiri para poder seguir na cadeira.
            </h1>

            <img src="/meme.png" className="w-[300px] h-[300px]" />

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