import MUIDataTable from "mui-datatables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Container } from "@/Components/Container";
import { PrimaryButton } from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import DangerButton from "../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/DangerButton";

export default function Index({ auth, colaboradors }) {
  const data = colaboradors;

  const form = useForm();

  function onCLickDelete(id) {
    if (confirm("Confirma a exclusão?")) {
      form.delete(route("colaboradors.destroy", id));
    }
  }

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
      name: "matricula",
      label: "Matricula",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "cpf",
      label: "CPF",
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
              <Link href={route("colaboradors.edit", value)}>
                <PrimaryButton
                  className="p-2"
                  variant="contained"
                  color="primary"
                >
                  Editar
                </PrimaryButton>
              </Link>

              <DangerButton
                onClick={() => onCLickDelete(value)}
                className="m-2"
                variant="contained"
                color="primary"
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
              Coladoradores
            </h2>
            <Link href={route("colaboradors.create")}>
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
    </>
  );
}
