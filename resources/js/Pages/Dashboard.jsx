import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Container } from "@/Components/Container";
import Paper from "@mui/material/Paper";

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <Container>
        <section className="flex gap-5">
          <Paper className="p-5 w-52 text-center">
            <h1 className="uppercase text-gray-500 font-semibold">
              Total de pontos:
            </h1>
            <div className="text-center text-4xl"> 8 </div>
            <span className="text-sm text-gray-400">
              Quantidade de registro do Banco de dados.
            </span>
          </Paper>
          <Paper className="p-5 w-48 text-center">
            <h1 className="uppercase text-gray-500 font-semibold">
              Colaboradores:
            </h1>
            <div className="text-center text-4xl"> 8 </div>
            <span className="text-sm text-gray-400">
              Quantidade de registro do Banco de dados.
            </span>
          </Paper>
          <Paper className="p-5 w-48 text-center">
            <h1 className="uppercase text-gray-500 font-semibold">Escalas:</h1>
            <div className="text-center text-4xl"> 8 </div>
            <span className="text-sm text-gray-400">
              Quantidade de registro do Banco de dados.
            </span>
          </Paper>

          <Paper className="p-5 w-48 text-center">
            <h1 className="uppercase text-gray-500 font-semibold">Fila:</h1>
            <div className="text-center text-4xl"> 8 </div>
            <span className="text-sm text-gray-400">
              Quantidade de itens na fila.
            </span>
          </Paper>
        </section>

        <section>
          <div>
            <h1 className="text-3xl pt-5">Lista RabbitMQ</h1>
            <p className="pt-5 text-zinc-600">
              Aqui será apresentando a lista dos pontos que estão na fila do
              RabbitMQ a serem processadas.
            </p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <p>Grid com lista do rabbitMQ </p>
            </div>
          </div>
        </section>
      </Container>

      <div className="py-12"></div>
    </AuthenticatedLayout>
  );
}
