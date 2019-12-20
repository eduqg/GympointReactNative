## Configuração de desenvolvimento via wifi

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
Defina o proxy reverso a ser utilizado para a comunicação da aplicação via wifi.

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
