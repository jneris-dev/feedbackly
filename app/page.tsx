export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        FeedBackly 💬
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Colete feedbacks dos usuários do seu site de forma simples e rápida.
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-black text-white px-6 py-2 rounded-xl"
        >
          Entrar
        </a>

        <a
          href="/register"
          className="border px-6 py-2 rounded-xl"
        >
          Criar conta
        </a>
      </div>
    </main>
  );
}