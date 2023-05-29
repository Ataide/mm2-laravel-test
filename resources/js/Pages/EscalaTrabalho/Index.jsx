import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import { PrimaryButton } from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import { Container } from "@/Components/Container";
import MUIDataTable from "mui-datatables";

export default function Index({ auth, escalas }) {
  const data = escalas;

  const route = window.route;

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
      name: "nome",
      label: "Nome",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "inicio",
      label: "Inicio",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "fim",
      label: "Fim",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "id",
      label: "Ações",
      options: {
        filter: true,
        sort: false,

        customBodyRender: value => {
          return (
            <div className="text-center">
              <Link href={route("escala-trabalho.edit", value)}>
                <PrimaryButton
                  className="p-2"
                  variant="contained"
                  color="primary"
                >
                  Editar
                </PrimaryButton>
              </Link>
              <DangerButton
                className="m-2"
                variant="contained"
                color="primary"
                onClick={() => {
                  alert("asd");
                }}
              >
                Deletar
              </DangerButton>
            </div>
          );
        },
      },
    },
  ];

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Escala de Trabalho
            </h2>
            <Link href={route("escala-trabalho.create")}>
              <PrimaryButton> Adicionar </PrimaryButton>
            </Link>
          </>
        }
      >
        <Container>
          <MUIDataTable
            title={""}
            data={data}
            columns={columns}
            options={options}
          />
        </Container>
      </AuthenticatedLayout>
      ;
    </>
  );
}
