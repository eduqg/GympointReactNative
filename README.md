# Gympoint

## Desafio Final Rocketseat GoStack React Native

<img src="./src/assets/demonstration.gif" width="500" />

## Equipamento Utilizado

1. Ubuntu 18.04 LTS
2. Celular Android 8.0

## Getting Started

É pré-requisito configurar o [Backend da Aplicação](https://github.com/eduqg/GympointBack) para a execução deste projeto.

Clone este repositório e na pasta raiz instale as dependências do projeto.

```console
yarn
```

Caso queira configurar o desenvolvimento via wifi, consulte o arquivo de [Configuração via Wifi](WifiPhoneConfiguration.md) (Recomendado).


Configure o arquivo .env com seu ip ou com localhost.

```console
cp .env-example .env
```

Execute o metro bundler.

```console
yarn start
```

Em um outro terminal, instale o aplicativo.

```console
react-native run-android
```

## Testes

Execute os testes da aplicação. A primeira execução pode demorar.

```console
yarn test
```


## Características do software

### Funcionalidades

* Entrar como estudante.
* Sair.
* Pedir auxílio.
* Listar pedidos de auxílio feitos.
* Fazer Checkin.
* Listar Checkins.
* Navegação com header.
* Toasts de feedback.

### Tecnologias principais

* Redux.
* Redux-saga.
* Redux persist.
* Somente Functional Components.
* Utilização de React Hooks.
* Axios.
* Integrado ao backend Gympoint em Node.js.
* Prettier, EditorConfig e Prettier para estilizações de código.
* Utilização de date-fns.
<!--
## Imagens do Aplicativo

Entrar

<img src="./src/assets/login.jpeg" width="45%" height="45%">

Pedidos de auxílio

<img src="./src/assets/helps.jpeg"  width="32%" height="32%"><img src="./src/assets/question.jpeg"  width="32%" height="32%"><img src="./src/assets/response.jpeg"  width="32%" height="32%">

Checkin

<img src="./src/assets/checkins.jpeg" width="45%" height="45%"><img src="./src/assets/checkinout.jpeg" width="45%" height="45%">

-->
