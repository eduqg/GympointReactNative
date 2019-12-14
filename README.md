# Gympoint

## Desafio Final Rocketseat GoStack React Native

## Equipamento Utilizado

1. Ubuntu 18.04 LTS
2. Celular Android 8.0

## Instalação e Execução

É pré-requisito configurar o [backend da aplicação](https://github.com/eduqg/GympointBack) para a execução deste projeto.

Clone este repositório e na pasta raiz instale as dependências do projeto.

```console
yarn
```

Cheque se o seu celular e seu computador estão no mesmo wifi.

Conecte seu celular com um cabo usb no computador.

Obtenha seu ip com o seguinte comando:

```console
ifconfig | grep "inet "
```

Na pasta raiz crie um arquivo .env e insira o seu ip da seguinte forma.

```console
MY_IP=192.xxx.x.xx
```

Em um terminal, execute o metro bundler.
```console
yarn start
```

Em um outro terminal, instale a aplicação.
```console
react-native run-android
```

Na tela da aplicação, mesmo que ocorra algum erro, cachoalhe-o , abra as configuração e defina o ip e a porta que serão utilizadas.
```console
192.xxx.x.xx:8081
```
Mapear porta utilizada com adb

```console
adb reverse tcp:9090 tcp:8081
```

Abra o reactotron para verificar logs de desenvolvimento se desejar.

Execute o metro bundler novamente.

```console
yarn start --reset-cache
```

Em outro terminal, instale o aplicativo.
```console
react-native run-android
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


## Imagens

Entrar

<img src="./src/assets/login.jpeg" width="45%" height="45%">

Pedidos de auxílio

<img src="./src/assets/helps.jpeg"  width="32%" height="32%"><img src="./src/assets/question.jpeg"  width="32%" height="32%"><img src="./src/assets/response.jpeg"  width="32%" height="32%">

Checkin

<img src="./src/assets/checkins.jpeg" width="45%" height="45%"><img src="./src/assets/checkinout.jpeg" width="45%" height="45%">
