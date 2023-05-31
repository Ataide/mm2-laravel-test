# MM2 Softawre - Defafio técnico.

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Instrução de Instalação

Ferramentas e versões utilizadas:

- NodeJs v16.20.0
- docker v20.10.22
- docker-compose v2.14.2

Depois de fazer o clone do projeto, podemos ver que a pasta vendor foi adicionado ao repositório, favor desconsiderar em uma eventual analise técnica, isso só deu pra facilitar o levante dos containers que e nosso único comando a ser dado.

Dentro da pasta do projeto:

```
$ docker-compose up -d --build
```

Depois de instalar os containers, devemos rodas as migrations com o comando:

```
$  ./vendor/bin/sail artisan migrate
```

Agora devemos rodar os seeds.

```
$ ./vendor/bin/sail artisan db:seed
```

Agora podemos acessar o sistema que está disponivel em:

- [http://localhost](http://localhost)
  - credenciais admin:
    - email: admin@email.com
    - senha: password

Já o painel do **Rabbitmq** está disponível em:

- [http://localhost:15672](http://localhost:15672)
  - credencias do painel
    - user: guest
    - pass: guest

Na Pasta raiz do projeto tem a collection do postman com as rotas e seus payload.

## Sobre o desenvolvimento

Fico feliz em poder novamente ter um contato com esse framework fantástico. A Aplicação foi iniciada de forma padrão seguindo as sugestões da documentação ofical do laravel para o started kit.

#### Features:

- [x] Autenticação (via Token usando JWT).
- [x] Listagem de colaboradores.
- [x] Listagem de escalas de trabalho.
- [x] Cadastro de uma escala.
- [x] Cadastro de um colaborador.
- [x] Edição de dados de um colaborador.
- [x] Exclusão de um colaborador(hard delete).
- [x] Deve ser possível também buscar colaboradores pelo nome, documento, matrícula.
- [x] Utiliza banco de dados relacional, mysql.
- [x] As únicas rotas públicas da aplicação deverá ser o login
- [x] Cada colaborador só poderá ter uma escala vinculada
- [x] Desafio extra (Fila com RabbitMq)
- [x] Receber um registro de ponto com as seguintes informações:
  - [x] Horário do registro
  - [x] Latitude e longitude do registro(Por GeoLocalizacao ou manual.)
  - [x] Enviar para uma fila e depois ser consumida e gravado no banco de dados:
  - [ ] Foto (selfie) do registro - opcional
- [x] Você pode utilizar um endpoint na sua API que irá enviar as informações de registro
      para uma fila RabbitMQ.
- [x] Essa fila será consumida e as informações gravadas no banco de dados que pode ser
      no seu banco relacional da aplicação,
- [x] Crie um desenho da sua arquitetura para apresentar sua solução
- [x] Dê preferência para rodar tudo com um docker compose ou equivalente

#### Teste

Para rodar os teste bastas executar o comando:

```
$ ./vendor/bin/sail test
```

#### Extra - Queue - RabbitMq

O registro de ponto nunca é adicionado diretamente no banco de dados pela api nem pelo front. O metodo store dos controllers tanto da api quanto do front enviam essa as informações do registro de ponto para um Job Queueable que adiciona a uma fila do RabbitMQ e existe uma rota da api "/api/start-queue" que chama um "worker" pra ler essa fila e gravar no banco de dados. Foi realizado essa abordagem simples para exemplificar o propósito do teste.

#### Considerações Finais

Desde de já agradeço a oportunidade de participar do processo seletivo, e ficarei feliz em poder explicar todo o desenvolvimento do projeto e todo o functionamento dele e as decisões tomadas durante todo o processo.

Agradeço atenção.
Ataide Bastos.
