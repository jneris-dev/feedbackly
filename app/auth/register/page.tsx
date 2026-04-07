export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Criar conta</h2>

        <input
          type="text"
          placeholder="Nome"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Criar conta
        </button>
      </div>
    </div>
  );
}