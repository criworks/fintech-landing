import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-2">
      <header className="flex w-full items-center justify-between p-6">
        <div className="text-2xl font-bold text-gray-800">Fintech Landing</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Características
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Precios
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <section className="my-10">
          <h1 className="text-6xl font-bold text-gray-900">
            Simplifica tus finanzas con{" "}
            <span className="text-blue-600">Fintech Landing</span>
          </h1>
          <p className="mt-3 text-2xl text-gray-600">
            La solución definitiva para gestionar tu dinero de forma inteligente.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700"
            >
              Empezar ahora
            </a>
          </div>
        </section>

        <section className="my-10 w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-800">
            Características principales
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Gestión de Gastos
              </h3>
              <p className="mt-2 text-gray-500">
                Controla tus gastos diarios y semanales con facilidad.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Análisis de Inversiones
              </h3>
              <p className="mt-2 text-gray-500">
                Obtén información valiosa sobre tus inversiones.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">
                Reportes Personalizados
              </h3>
              <p className="mt-2 text-gray-500">
                Genera informes detallados para una mejor toma de decisiones.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}
