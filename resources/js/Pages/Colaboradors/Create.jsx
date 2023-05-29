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

export default function Create({ auth, escalas }) {
  const route = window.route;
  const nomeInput = useRef();
  const matriculaInput = useRef();
  const { data, setData, errors, post, reset, processing, recentlySuccessful } =
    useForm({
      nome: "",
      matricula: "",
      cpf: "",
      escala_trabalho_id: "",
    });

  const onSubmit = e => {
    e.preventDefault();

    post(route("colaboradors.store"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: errors => {
        if (errors.nome) {
          reset("nome");
          nomeInput.current.focus();
        }

        if (errors.matricula) {
          reset("matricula");
          matriculaInput.current.focus();
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
              Colaborador
            </h2>
          </>
        }
      >
        <Container>
          <Card>
            <section className="">
              <header>
                <h2 className="text-lg font-medium text-gray-900">
                  Informações do Colaborador.
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Preencha todos as informações do colaborador.
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
                  <InputLabel htmlFor="matricula" value="Matricula" />

                  <TextInput
                    id="matricula"
                    ref={matriculaInput}
                    value={data.matricula}
                    onChange={e => setData("matricula", e.target.value)}
                    type="text"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.matricula} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="cpf" value="CPF" />

                  <TextInput
                    id="cpf"
                    value={data.cpf}
                    onChange={e => setData("cpf", e.target.value)}
                    type="text"
                    className="mt-1 block w-full"
                  />

                  <InputError message={errors.cpf} className="mt-2" />
                </div>

                <div>
                  <InputLabel htmlFor="escala" value="Escala de Trabalho" />
                  <select
                    className=" w-full"
                    id="escala_trabalho_id"
                    onChange={e =>
                      setData("escala_trabalho_id", e.target.value)
                    }
                  >
                    <option selected>Selecione uma Escala</option>
                    {escalas.map(escala => {
                      return (
                        <option key={escala.id} value={escala.id}>
                          {escala.nome}
                        </option>
                      );
                    })}
                  </select>
                  <InputError
                    message={errors.escala_trabalho_id}
                    className="mt-2"
                  />
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
