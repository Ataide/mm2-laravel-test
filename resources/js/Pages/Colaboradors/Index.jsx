import MUIDataTable from "mui-datatables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Container } from "@/Components/Container";
import { PrimaryButton } from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import DangerButton from "../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/DangerButton";
import { stringify } from "qs";
import { useEffect } from "react";

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
      name: "escala_trabalho",
      label: "Escala",
      options: {
        filter: true,
        sort: false,
        customBodyRender: escala =>
          escala.nome + "-" + escala.inicio + " " + escala.fim,
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

  var optionsNavigation = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          console.log(result.state);
          //If granted then you can directly call your function here
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            success,
            errors,
            optionsNavigation
          );
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  }, []);

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
