import Link from 'next/link';

export default function ExperienciaProfissional() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Experiência Profissional</h1>
      <ul className="list-disc pl-6 space-y-2">

        <li><b>Estagiário de Suporte Técnico</b></li>
        <p>Urbano Vitalino Advogados (08/2021 - 08/2023)</p>
        <p>Como estagiário, realizava suporte nos acesso aos principais tribunais.</p>
        <p>PJe, e-saj, Projudi, GCPJ e afins.</p>
        <p>Também realizava suporte no geral, ex: Windows, Office, Impressoras e Certificados Digitais.</p>
        <br></br>
        <li><b>Analista de Sistemas Jr.</b></li>
        <p>Urbano Vitalino Advogados (08/2023 - Atualmente)</p>
        <p>Como Analista, passei a tratar demandas nos sistemas e serviços internos do escritório.</p>
        <p>Gerenciamento nos sistemas de correio eletônico: Google Workspace e Zimbra.</p>
        <p>Também atuo na manutenção do frontend no site principal que foi desenvolvido utilizando o framework Bootstrap,</p>
        <p>e no Gestão de Ativos, sistemas de inventário interno desenvolvido com Django.</p>
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