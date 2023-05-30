import MUIDataTable from "mui-datatables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Container } from "@/Components/Container";
import { PrimaryButton } from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import DangerButton from "../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/DangerButton";
import { stringify } from "qs";
import { useEffect } from "react";

export default function Index({ auth, registros }) {
  const data = registros;
  const route = window.route;
  const form = useForm();

  function onCLickDelete(id) {
    if (confirm("Confirma a exclusão?")) {
      form.delete(route("registro-ponto.destroy", id));
    }
  }

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

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Registro Ponto
            </h2>
            <Link href={route("registro-ponto.create")}>
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
