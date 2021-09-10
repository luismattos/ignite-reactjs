# Ignite ReactJS

## Capitulo 1

- Cria toda a interface atraves do javascript

- **Inicializar o repositorio criando o package.json**

  - `$ yarn init -y`
  - `$ npm init -y`
  - *package.json* possui as informacoes do projeto e a lista de dependencias.

- **Adicionar dependencias ao projeto**
  - `$ yarn add nome_dependencia`

- **Lista de dependencias minimas a serem instaladas**
  - *react*
    - cria a pasta *node_modules*, que armazena o codigo das dependencias instaladas na aplicacao.
    - cria p arquivo *yarn.lock*
  - *react-dom*
    - permite que o *react* se comunique com a arvore de elementos do html.

- **Estrutura Básica de um projeto ReactJS**
  - pasta */src*, que contem todos os nossos codigos
  - pasta */public*, que contem todos os assets da aplicacao.
  - arquivo */src/index.jsx*
  - arquivo */public/index.html*, que contem no *body* apenas uma `<div id="root"></div>`.

- Ao utilizar html dentro do javascript, a extensao dos arquivos js na pasta _/src_ deve ser alterada de _.js_ para _.jsx_

- [**Babel**](https://babeljs.io/)
  - Converte o codigo de uma maneira que todos os browsers e ambientes da aplicacao consigam entender todos os codigos
  - arquivo */babel.config.js*, que contem os presets do babel
  - **Converter o */src/index.js* atraves do babel**
    - `$ yarn babel src/index.js -o dist/bundle.js`
    - */dist/bundle.js* é a convencao do nome de arquivo de saida usada pelo babel.
  - As dependencias do Babel devem ser instaladas como dependencias de desenvolvimento, ou seja, com o modificador *-D*
  - **Lista de dependencias a serem instaladas**
    - *@babel/core*
    - *@babel/cli*, para conseguir executar o babel pela linha de comando
    - *@babel/preset-env*, biblioteca que identifica o ambiente de execucao da aplicacao para realizar a conversao da melhor forma
    - *@babel/preset-react*, permite ao babel entender o codigo html de dentro dos arquivos js
    - *@babel/preset-typescript*, para fazer o babel entender typescript
  - Configurar o Babel
    - Para evitar ter que importar o React em todo *.jsx*, precisamos adicionar a configuracao `runtime: 'automatic'` ao *preset-react* no arquivo de configuracoes do babel. 

- [**Webpack**](https://webpack.js.org/)
  - As dependencias do Webpack devem ser instaladas como dependencias de desenvolvimento, ou seja, com o modificador *-D*
  - Estipula uma serie de configuracoes (*loaders*) que vai ensinar para a aplicacao como ela deve tratar cada um dos tipos de arquivos importados, convertendo em arquivos entendidos para o browser, como por exemplo, os .sass em .css, etc.
  - `$ yarn webpack`
  - **Lista de dependencias a serem instaladas**
    - *webpack*
    - *webpack-cli*, para conseguir executar o webpack pela linha de comando
    - *html-webpack-plugin*, realiza a injecao do *js* no */public/index.html* gerando o */dist/index.html*
    - *webpack-dev-server*, remove a necessidade de sempre que realizar uma modificacao/atualizacao em algum codigo, ter que executar o `$ yarn webpack`, automatizando esse processo. Para deixar o webpack nesse modo, deve executar o comando `$ yarn webpack serve`
    - *@pmmmwh/react-refresh-webpack-plugin@0.5.0-rc.4*, ao atualizar o codido, o refresh da pagina mantem os estados dos objetos.
    - *babel-loader*, que é a integracao entre o babel e o webpack
    - *style-loader* e *css-loader*, para integrar arquivos de estilos de formatacao ao webpack. Devem ser usados em conjunto.
    - *sass-loader*, integracao do sass com o webpack
  - Configurar como o mapeamento do codigo é gerado. Para isso setamos a propriedade *devtool*. Uma opcao recomendada para desenvolvimento é a *eval-source-map*. Ja para producao, uma boa alternativa é o *source-map*
  - Precisamos configurar o Webpack para quando estamos em desenvolvimento ou em producao fazendo uso de uma variavel de ambiente que determina se estamos ou nao em modo desenvolvimento. Essa variavel é criada pela dependencia *cross-env*

- **Cross-env**
  - As dependencias do Cross-env devem ser instaladas como dependencias de desenvolvimento, ou seja, com o modificador *-D*
  - Serve para definir variaveis de ambiente, independente do sistema operacional
  - **Lista de dependencias a serem instaladas**
    - *cross-env*
  - Criamos dois scripts no */package.json*, um para executar o app no modo desenvolvimento (*dev*) e outro no modo producao (*build*). Assim, a partir de agora, para executar o app no modo de desenvolvimento, fazemos `$ yarn dev`, enquanto que para executar no modo de producao fazemos `$ yarn build`

- **Sass - Syntactically Awesome Style Sheets**
  - As dependencias do Sass devem ser instaladas como dependencias de desenvolvimento, ou seja, com o modificador *-D*
  - É um dos pre-processadores de css mais populares e que fornece varias funcionalidades uteis.
  - Os arquivos *.css* devem ser renomeados para *.scss*.
  - Da suporte ao encadeamento
  - **Lista de dependencias a serem instaladas**
    - *node-sass*

- **TypeScript**
  - As dependencias do Sass devem ser instaladas como dependencias de desenvolvimento, ou seja, com o modificador *-D*
  - **Lista de dependencias a serem instaladas**
    - *typescript*
    - *@types/react-dom*
  - Devemos inicializar o typescript na app.
    - `$ yarn tsc --init`, ou `$ yarn typescript --init`
    - Isso cria o arquivo de configuracao *tsconfig.json*
  - Configurar o typescript
  
