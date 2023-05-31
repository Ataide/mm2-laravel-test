import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { Container } from "@/Components/Container";
import MUIDataTable from "mui-datatables";
import Paper from "@mui/material/Paper";
import { PrimaryButton } from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { router } from "@inertiajs/react";
import { useState } from "react";
import axios from "axios";

export default function Dashboard({
  auth,
  colaboradors_count,
  escala_count,
  registros,
  api_token,
}) {
  const data = registros;
  const route = window.route;
  const form = useForm();

  const [syncQueue, setsyncQueue] = useState(false);

  const options = {
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    selectableRows: false,
  };

  const columns = [
    {
      name: "id",
      label: "#",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "colaboradors",
      label: "Nome",
      options: {
        filter: true,
        sort: true,
        customBodyRender: colaboradors => colaboradors.nome,
      },
    },
    {
      name: "longitude",
      label: "Longitude",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "latitude",
      label: "Latidude",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "created_at",
      label: "Data",
      options: {
        filter: true,
        sort: false,
        customBodyRender: data =>
          new Intl.DateTimeFormat("pt-br", {
            dateStyle: "short",
            timeStyle: "medium",
          }).format(new Date(data)),
      },
    },
  ];

  const handleSync = async () => {
    try {
      setsyncQueue(true);
      const queueResponse = await axios.get("/api/start-queue", {
        headers: {
          Authorization: `Bearer ${api_token}`,
        },
      });
      console.log(queueResponse);
      setsyncQueue(false);
      router.reload();
    } catch (error) {
      alert("Não existe nada na fila.");
    } finally {
      setsyncQueue(false);
    }
  };

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
            <h1 className="uppercase text-gray-500 font-semibold h-20">
              registro de pontos:
            </h1>
            <div className="text-center text-4xl"> {registros.length} </div>
            <span className="text-sm text-gray-400">
              Quantidade de registro do Banco de dados.
            </span>
          </Paper>
          <Paper className="p-5 w-48 text-center">
            <h1 className="uppercase text-gray-500 font-semibold h-20">
              Colaboradores:
            </h1>
            <div className="text-center text-4xl"> {colaboradors_count} </div>
            <span className="text-sm text-gray-400">
              Quantidade de registro do Banco de dados.
            </span>
          </Paper>
          <Paper className="p-5 w-48 text-center">
            <h1 className="uppercase text-gray-500 font-semibold h-20">
              Escalas:
            </h1>
            <div className="text-center text-4xl"> {escala_count || 0} </div>
            <span className="text-sm text-gray-400">
              Quantidade de registro do Banco de dados.
            </span>
          </Paper>
        </section>

        <section>
          <div>
            <h1 className="text-3xl pt-5">Lista RabbitMQ</h1>
            <p className="pt-5 text-zinc-600">
              Os registros de ponto adicionados irão para a lista <b>default</b>{" "}
              do RabbitMQ. Depois de adicionar o registro de ponto, clique np
              botão CONSUMIR FILA que é possível "simular" um cosumer, que irá
              armazenar no banco de dados os itens que estão na fila.
            </p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <p></p>
            </div>
            <div>
              <SecondaryButton className="btn" onClick={handleSync}>
                {syncQueue ? "Aguarde..." : "CONSUMIR FILA"}
              </SecondaryButton>
            </div>
            <Link href={route("registro-ponto.create")}>
              <PrimaryButton className="m-4">
                {" "}
                Novo Registro de Ponto{" "}
              </PrimaryButton>
            </Link>
          </div>
        </section>

        <MUIDataTable
          title={""}
          data={data}
          columns={columns}
          options={options}
        />
      </Container>

      <div className="py-12"></div>
    </AuthenticatedLayout>
  );
}
