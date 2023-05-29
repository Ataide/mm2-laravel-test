import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card } from "@/Components/Card";
import { Container } from "@/Components/Container";

import { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { PrimaryButton } from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function Create({ auth }) {
  const route = window.route;
  const nomeInput = useRef();
  const inicioInput = useRef();
  const { data, setData, errors, post, reset, processing, recentlySuccessful } =
    useForm({
      nome: "",
      inicio: "",
      fim: "",
    });

  const onSubmit = e => {
    e.preventDefault();

    post(route("escala-trabalho.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: errors => {
        if (errors.nome) {
          reset("nome");
          nomeInput.current.focus();
        }

        if (errors.inicio) {
          reset("inicio");
          inicioInput.current.focus();
        }
      },
    });
  };
  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Escala de Trabalho
            </h2>
          </>
        }
      >
        <Container>
          <Card>
            <section className="">
              <header>
                <h2 className="text-lg font-medium text-gray-900">
                  Informações da Escala de trabalho.
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Preencha todos as informações da escala.
                </p>
              </header>
              <form onSubmit={onSubmit} className="mt-6 space-y-6">
                <div>
                  <InputLabel htmlFor="nome" value="Nome" />

                  <TextInput
                    id="nome"
                    ref={nomeInput}
                    value={data.nome}
                    onChange={e => setData("nome", e.target.value)}
                    type="text"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.nome} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="inicio" value="inicio" />

                  <TextInput
                    id="inicio"
                    ref={inicioInput}
                    value={data.inicio}
                    onChange={e => setData("inicio", e.target.value)}
                    type="time"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.inicio} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="fim" value="fim" />

                  <TextInput
                    id="fim"
                    value={data.fim}
                    onChange={e => setData("fim", e.target.value)}
                    type="time"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.fim} className="mt-2" />
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
