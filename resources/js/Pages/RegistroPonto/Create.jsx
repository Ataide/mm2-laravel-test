import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TextInput from "@/Components/TextInput";
import { Card } from "@/Components/Card";
import { Container } from "@/Components/Container";
import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { PrimaryButton } from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Create({ auth, colaboradors }) {
  const route = window.route;
  const [addr, setAddr] = useState({});

  const [locationDenied, setLocationDenied] = useState(false);

  const {
    data,
    setData,
    errors,
    post,
    reset,
    get,
    processing,
    recentlySuccessful,
  } = useForm({});

  const onSubmit = e => {
    e.preventDefault();

    post(route("registro-ponto.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: errors => {},
    });
  };

  const optionsNavigation = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    setData({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  }

  function handleErros(err) {
    alert(
      "Aconteceu um erro ao solicitar suas coordenadas de GPS, A api utilizada para fazer isso só funciona sobre IPV4, ou não foi dado permisão para acessar a localização. Pode ser isso."
    );
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(
            success,
            handleErros,
            optionsNavigation
          );
          //If granted then you can directly call your function here
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(
            success,
            handleErros,
            optionsNavigation
          );
        } else if (result.state === "denied") {
          setLocationDenied(true);
        }

        result.onchange = function () {
          console.log(
            "Para usar a ferramenta, precisamos da permissão de geolocalização. "
          );
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
              Registro Ponto
            </h2>
          </>
        }
      >
        <Container>
          <Card>
            <section className="">
              {locationDenied && (
                <Alert severity="warning" className="mb-6">
                  <AlertTitle>Aviso</AlertTitle>
                  <p>
                    O Compartilhamento de Localização não está permitido para
                    esse site.
                  </p>
                  <p>
                    Para pegar automaticamente as coordenadas deve-se{" "}
                    <a
                      className="text-blue-600"
                      href="https://www.ailos.coop.br/wp-content/uploads/2023/01/Passo-a-passo-HabilitacaoLocalizacaoCO-Ailos.pdf"
                      target="_blank"
                    >
                      ativa a localização.
                    </a>
                  </p>
                </Alert>
              )}
              <Alert severity="info" className="mb-6">
                <AlertTitle>Repare Bem.</AlertTitle>
                <p>
                  Após vc adicionar um registro de ponto, fique atento que o
                  registro não será enviado direto para o banco de dados.
                </p>
              </Alert>

              <header>
                <h2 className="text-lg font-medium text-gray-900">
                  Informações de registro de ponto.
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Preencha quem vai marcar o ponto.
                </p>
              </header>
              <form onSubmit={onSubmit} className="mt-6 space-y-6">
                <div>
                  <InputLabel htmlFor="colaboradors" value="Colaborador" />
                  <select
                    className=" w-full"
                    id="colaboradors_id"
                    onChange={e => setData("colaboradors_id", e.target.value)}
                  >
                    <option>Selecione um colaborador.</option>
                    {colaboradors.map(colaboradors => {
                      return (
                        <option key={colaboradors.id} value={colaboradors.id}>
                          {colaboradors.nome}
                        </option>
                      );
                    })}
                  </select>
                  <InputError
                    message={errors.colaboradors_id}
                    className="mt-2"
                  />
                </div>

                <div>
                  <InputLabel htmlFor="latitude" value="Latitude" />

                  <TextInput
                    id="latitude"
                    value={data.latitude}
                    onChange={e => {
                      setData("latitude", e.target.value);
                    }}
                    type="text"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.latitude} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="longitude" value="Longitude" />

                  <TextInput
                    id="longitude"
                    value={data.longitude}
                    onChange={e => setData("longitude", e.target.value)}
                    type="text"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.longitude} className="mt-2" />
                </div>
                <div className="flex items-center gap-4">
                  <PrimaryButton disabled={processing}>Salvar</PrimaryButton>

                  <Transition
                    show={recentlySuccessful}
                    enterFrom="opacity-0"
                    leaveTo="opacity-0"
                    className="transition ease-in-out"
                  >
                    <p className="text-sm text-gray-600">Salvo com sucesso.</p>
                  </Transition>
                </div>
              </form>
            </section>{" "}
          </Card>
        </Container>
      </AuthenticatedLayout>
    </>
  );
}
