import { Link, Head } from "@inertiajs/react";
import { stringify } from "qs";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const route = window.route;

  const loginRequest = {
    email: "ataide.bastos@gmail.com",
    password: "senha123",
  };

  const colaboradorRequest = {
    nome: "Ataide",
    matricula: "245678",
    cpf: "12345678452",
    escala_trabalho_id: 1,
  };

  const escalaRequest = {
    nome: "Plantao 01",
    inicio: "00:00",
    fim: "04:00",
  };

  const registroRequest = {
    colaboradors_id: 2,
    longitude: "-39.5669",
    latitude: "-3.73",
  };

  const onlyId = {
    id: 2,
  };
  return (
    <>
      <Head title="Welcome" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen  bg-center bg-dots-lighter bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
          {auth.user ? (
            <Link
              href={route("dashboard")}
              className="font-semibold text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route("login")}
                className=" bg-emerald-600 p-3 rounded-xl font-semibold text-zinc-200 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log in
              </Link>

              <Link
                href={route("register")}
                className="ml-4 font-semibold text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Register
              </Link>
            </>
          )}
        </div>
        <section className="mt-20">
          <header className="bg-gray-900 text-white py-4 text-center">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold">Documentação API </h1>
            </div>
            <div className="text-zinc-500 text-lg" style={{ width: 800 }}>
              <p>
                Todos os recursos da api foram listados abaixo, com seus
                respectivos exemplos. Caso queria visualizar o front-end para
                testar melhor as funcionalidades use o botão login ou registro
                no canto superior direito para realizar o onboard.{" "}
              </p>
            </div>
          </header>

          <section className="mb-8 mt-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Authenticação</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">HTTP Method</th>
                  <th className="px-4 py-2">Endpoint</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-bold text-yellow-500">POST</td>
                  <td className="px-4 py-2">/api/register</td>
                  <td className="px-4 py-2">
                    Cria um novo usuário no sistema.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-yellow-500">POST</td>
                  <td className="px-4 py-2">/api/login</td>
                  <td className="px-4 py-2">
                    Realiza o login e obtem um novo token JWT.
                  </td>
                </tr>
              </tbody>
            </table>
            <section className="text-white">
              <h2 className="text-xl font-bold mb-2">Example Request</h2>
              <pre className="bg-gray-300 p-4 rounded-lg">
                <code className="text-sm text-gray-600">
                  POST /api/register Content-Type: application/json <br />
                  {JSON.stringify(loginRequest, null, 2)}
                </code>
                <br />
                <br />
                <code className="text-sm text-gray-600">
                  POST /api/login Content-Type: application/json <br />
                  {JSON.stringify(loginRequest, null, 2)}
                </code>
              </pre>
            </section>
          </section>

          <section className="mb-8 mt-20 text-white">
            <h2 className="text-2xl font-bold mb-2">Colaborador</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">HTTP Method</th>
                  <th className="px-4 py-2">Endpoint</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-bold text-green-500">GET</td>
                  <td className="px-4 py-2">/api/colaboradores</td>
                  <td className="px-4 py-2">Lista todos os colaboradores</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-green-500">GET</td>
                  <td className="px-4 py-2">/api/colaboradores/search</td>
                  <td className="px-4 py-2">
                    Busca por colaboradores por qualquer um dos parametros
                    abaixo.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-yellow-500">POST</td>
                  <td className="px-4 py-2">/api/colaboradores</td>
                  <td className="px-4 py-2">Cria um novo colaborador</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-purple-500">PATCH</td>
                  <td className="px-4 py-2">/api/colaboradores</td>
                  <td className="px-4 py-2">
                    Atualiza um determinado colaborador
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-red-600">DELETE</td>
                  <td className="px-4 py-2">/api/colaboradores</td>
                  <td className="px-4 py-2">Deleta um colaborador</td>
                </tr>
              </tbody>
            </table>
            <section className="text-white mt-10">
              <h2 className="text-xl font-bold mb-2">Exemplo de Request</h2>
              <pre className="bg-gray-300 p-4 rounded-lg">
                <code className="text-sm text-gray-600">
                  GET /api/colaboradores/search Content-Type: application/json
                  Headers: Authorization Bearer "TOKEN" <br />
                  {JSON.stringify(colaboradorRequest, null, 2)}
                </code>
                <br />
                <br />
                <code className="text-sm text-gray-600">
                  POST /api/colaboradores Content-Type: application/json <br />
                  {JSON.stringify(
                    delete colaboradorRequest.id && colaboradorRequest,
                    null,
                    2
                  )}
                </code>
                <br />
                <br />
                <code className="text-sm text-gray-600">
                  PATH /api/colaboradores Content-Type: application/json <br />
                  {JSON.stringify(
                    Object.assign(colaboradorRequest, onlyId),
                    null,
                    2
                  )}
                </code>
                <br />
                <br />
                <code className="text-sm text-gray-600">
                  DELETE /api/colaboradores Content-Type: application/json{" "}
                  <br />
                  {JSON.stringify(onlyId, null, 2)}
                </code>
              </pre>
            </section>
          </section>

          <section className="mb-8 mt-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Escala Trabalho</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">HTTP Method</th>
                  <th className="px-4 py-2">Endpoint</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-bold text-green-500">GET</td>
                  <td className="px-4 py-2">/api/escala_trabalho</td>
                  <td className="px-4 py-2">Lista todos os Escala Trabalho</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-yellow-500">POST</td>
                  <td className="px-4 py-2">/api/escala_trabalho</td>
                  <td className="px-4 py-2">Cria um novo colaborador</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-purple-500">PATCH</td>
                  <td className="px-4 py-2">/api/escala_trabalho</td>
                  <td className="px-4 py-2">
                    Atualiza um determinado colaborador
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-red-600">DELETE</td>
                  <td className="px-4 py-2">/api/escala_trabalho</td>
                  <td className="px-4 py-2">Deleta um colaborador</td>
                </tr>
              </tbody>
            </table>
            <section className="text-white mt-10">
              <h2 className="text-xl font-bold mb-2">Exemplo de Request</h2>
              <pre className="bg-gray-300 p-4 rounded-lg">
                <code className="text-sm text-gray-600">
                  POST /api/colaboradores Content-Type: application/json <br />
                  {JSON.stringify(escalaRequest, null, 2)}
                </code>
                <br />
                <br />
                <code className="text-sm text-gray-600">
                  PATH /api/colaboradores Content-Type: application/json <br />
                  {JSON.stringify(
                    Object.assign(escalaRequest, onlyId),
                    null,
                    2
                  )}
                </code>
                <br />
                <br />
                <code className="text-sm text-gray-600">
                  DELETE /api/colaboradores Content-Type: application/json{" "}
                  <br />
                  {JSON.stringify(onlyId, null, 2)}
                </code>
              </pre>
            </section>
          </section>

          <section className="mb-8 mt-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Registro de Ponto</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">HTTP Method</th>
                  <th className="px-4 py-2">Endpoint</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-bold text-green-500">GET</td>
                  <td className="px-4 py-2">/api/registro_ponto</td>
                  <td className="px-4 py-2">
                    Lista todos os registros de ponto
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-bold text-yellow-500">POST</td>
                  <td className="px-4 py-2">/api/registro_ponto</td>
                  <td className="px-4 py-2">Cria um novo registro de ponto</td>
                </tr>
              </tbody>
            </table>
            <section className="text-white mt-10">
              <h2 className="text-xl font-bold mb-2">Exemplo de Request</h2>
              <pre className="bg-gray-300 p-4 rounded-lg">
                <code className="text-sm text-gray-600">
                  POST /api/registro_ponto Content-Type: application/json <br />
                  {JSON.stringify(registroRequest, null, 2)}
                </code>
                <br />
                <br />
              </pre>
            </section>
          </section>

          <section className="mb-8 mt-10 text-white">
            <h2 className="text-2xl font-bold mb-2"> Consumir a Fila </h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">HTTP Method</th>
                  <th className="px-4 py-2">Endpoint</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-bold text-green-500">GET</td>
                  <td className="px-4 py-2">/api/start-queue</td>
                  <td className="px-4 py-2">
                    Consome os items da fila e grava no banco de dados.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </>
  );
}
