# Instruções iniciais

`yarn init -y` Gera o arquivo package.json, que tem escrito as informações principais do projeto e a identificação das suas dependencias.

`yarn add react` instala o react no projeto e as dependencias iniciais que o react necessita, além de colocar no projeto o arquivo yarn.lock (procurar ver o que esse arquivo faz) e a pasta node_modules, onde estará todas o código com todas as dependencias que forem instaladas no projeto.

`yarn add react-dom` É como se trabalha com react voltado para web. Permitindo que o react se comunique com a DOM (A árvore de elementos do HTML).

# Estrutura de pastas

## src

Onde vai ficar todo o código javascript da aplicação

## public

Onde vai ficar todos os arquivos publicos, que necessitam se conectar com o meio externo.

# Babel

É uma biblioteca responsável por converter (compilar) o código de uma forma que todos os navegadores e todo o ambiente entenda todos os códigos da aplicação.

## Instalação

`yarn add @babel/core @babel/cli @babel/preset-env -D` (-D usado apenas para modo de desenvolvimento)

- @babel/core - a biblioteca do babel, praticamente todo o código está aqui.
- @babel/cli - Permite usar comandos do babel através da linha de comando.
- @babel/preset-env - Identifica o ambiente onde a aplicação está e busca executar da melhor maneira possível. ( se é uma aplicação react, se é uma aplicação node para backend, para cada caso o babel vai analisar e fornecer a melhor forma de execução).

- @babel/preset-react - Permite, entre outras coisas, que seja possível processar o html dentro do javascript (necessário para o react).

## Configuração

criar na raiz do projeto o arquivo `babel.config.js` e adicionar o seguinte código

```
module.exports = {
  presets: {
    '@babel/preset-env',
    '@babel/preset-react'
  }
}
```

Graças ao cli, torna-se possível usar o código abaixo, onde o babel vai converter o arquivo onde estou escrevendo o js e ele converte para ser possível os navegadores lerem o código e processar de forma adequada.
`yarn babel src/index.js --out-file dist/bundle.js `

# Webpack

Responsável por tratar tipos de arquivos necessários em uma aplicação e converter em arquivos entendíveis pelos navegadores.
ex: .scss -> .css

## Instalação

`yarn add webpack webpack-cli webpack-dev-server -D `

## Configuração

Criar na raiz do projeto o arquivo `webpack.config.js` e adicionar o seguinte código:

```
//convenção para poder tratar o código independente do sistema operacional.
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //indica onde está o arquivo principal da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'), // indica onde está o arquivo de saída da aplicação
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'], //falando para a aplicação tratar os arquivos js e jsx
  },
  module: {
    rules: [//cria um array com regras para verificar cada extensão e tratar da forma correta.
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader', //integra o babel e o webpack. Responsável por converter o tipo do arquivo que está no test para um tipo que o navegador entenda.
      }
    ]
  }
}
```

# Estrutura do React

Diferente de uma página HTML estática, no React nós não temos todos os elementos da página contidos nela, por convenção, no arquivo index nós teremos apenas uma div com id root.

Todo o conteúdo renderizado na página estarão em outros arquivos que são carregados através do webpack e do babel e chamado para o index através do arquivo bundle.

```
//Estamos usando a propriedade render do react dom para renderizar o conteúdo da função App e direcionando para ser renderizado no elemento que tiver o id root na página html.

//Na página HTML por convenção há somente uma div com um id root, lá também adicionamos como script o arquivo bundle.js da pasta dist. Quando rodarmos o webpack, todo o conteúdo dos arquivos jsx serão convertidos no arquivo bundle, que será chamado no arquivo html, renderizando todo o conteúdo.

import { render } from "react-dom";
import { App } from "./App";

render(<App />, document.getElementById('root'));
```

# Configurando ambiente de desenvolvimento e produção

No arquivo webpack config se cria uma const e atribui a ela uma verificação para ser diferente de production
`const isDevelopment = process.env.NODE_ENV !== 'production'`

Dentro do module-exports, a propriedade mode recebe como valor a verificação constante em isDevelopment, se for truthy, é atribuído o modo de desenvolvimento, se for falsy (NODE_ENV é igual 'production'), é atribuído o modo de produção.

A propriedade devtool também recebe a mesma verificação. Essa propriedade cuida do source map, para poder verificar o código original da aplicação, mesmo com ele no meio do código que é gerado para o React ser usado.

Via linha de comando, cria-se a NODE_ENV `NODE_ENV=production yarn webpack `
em package.json, cria-se a propriedade script, passando um atalho e o valor que será atribuído quando os modos forem chamados.

```
  "scripts": {
    "dev": "webpack serve",
    "build": "NODE_ENV=production webpack"
  },
```

assim, quando usarmos yarn dev, o webpack chamará como estávamos fazendo até então, e quando chamarmos yarn build, ele atribuirá o valor production à NODE_ENV, e passará a usar o modo de produção.

# Importando arquivos CSS

instala as dependencias através desse código `yarn add style-loader css-loader -D`
Cria uma nova rule no webpack.config, para tratar os imports de arquivos css.

```
 {
   test: /\.css$/,
   exclude: /node_modules/,
   use: ['style-loader', 'css-loader'],
},
```

A partir daqui, é só importar usando o caminho corretamente. :)

## EXTRA-Utilizando SASS

instala a dependencia através desse código `yarn add sass-loader -D` e a dependencia `yarn add node-sass -D`
Cria uma nova rule no webpack.config, para tratar os imports de arquivos scss.

```
 {
   test: /\.scss$/,
   exclude: /node_modules/,
   use: ['style-loader', 'css-loader', sass-loader],
},
```

A partir daqui, é só importar usando o caminho corretamente. :)
