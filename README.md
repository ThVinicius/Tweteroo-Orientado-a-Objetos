### Projeto 25 Tweterro POO

<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Sumário

- [Descrição](#description)
- [Documentação da API](#api)
  - [Rotas de autenticação](#authentication-routes)

#

<div id='description'/>

## Descrição

Tweterro POO é um projeto refatorado em orientado a objetos com classes.

Código original: <a href="./assets/files/tweteroo__base.zip" download>Click to Download</a>

#

<div id='api'/>

## Documentação da API

<div id='authentication-routes'/>

### Rota de cadastro e login

```http
POST /sign-up
```

<h3>Requisição (body):</h3>

| Params     | Type     | Description  |
| :--------- | :------- | :----------- |
| `username` | `string` | **Required** |
| `avatar`   | `string` | **Required** |

<h3>Respostas:</h3>

<h3>Casos de erro:</h3>

| Status code | Cause                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |

<h3>Em caso de sucesso: (status code <span style="color:green">200</span>) e uma string:</h3>

```json
"OK deu tudo certo"
```

#

<div id='tweets-routes'/>

### Rota do tweets

<div id='post-tweet'/>

#### Adicionar um tweet

```http
POST /tweets
```

<h3>Requisição (body):</h3>

| Params     | Type     | Description  |
| :--------- | :------- | :----------- |
| `tweet`    | `string` | **Required** |
| `username` | `string` | **Required** |

<h3>Respostas:</h3>

<h3>Casos de erro:</h3>

| Status code | Cause                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |
| `404`       | _Usuário não encontrado_          |

<h3>Em caso de sucesso: (status code <span style="color:green">201</span>) e uma string:</h3>

```json
"OK, seu tweet foi criados"
```

#

<div id='get-tweets-user'/>

#### Pegar os tweets do usuário

```http
GET /tweets/:username
```

<h3>Requisição (params):</h3>

| Params     | Type     | Description  |
| :--------- | :------- | :----------- |
| `username` | `string` | **Required** |

<h3>Respostas:</h3>

<h3>Em caso de sucesso: (status code <span style="color:green">200</span>) e um array de todos os tweets daquele usuário:</h3>

```json
[
  { "tweet": "Oi", "username": "Teste", "avatar": "https://..." },
  { "tweet": "Olá", "username": "Teste", "avatar": "https://..." },
  { "tweet": "Saudações", "username": "Teste", "avatar": "https://..." }
]
```

#

<div id='get-tweets'/>

#### Pegar todos os tweets

É necessário passar query params nessa rota

```http
GET /tweets
```

<h3>Requisição (query):</h3>

| Params | Type     | Description                     |
| :----- | :------- | :------------------------------ |
| `page` | `number` | **Required**,**greater than 1** |

<h3>Respostas:</h3>

<h3>Em caso de sucesso: (status code <span style="color:green">200</span>) e um array de todos os tweets:</h3>

```json
[
  { "tweet": "Oi", "username": "Teste", "avatar": "https://..." },
  { "tweet": "Oi", "username": "Ronaldinho", "avatar": "https://..." },
  { "tweet": "Olá", "username": "Teste", "avatar": "https://..." },
  { "tweet": "Saudações", "username": "Teste", "avatar": "https://..." }
]
```

#

## Rodar localmente

Clone o projeto

```bash
  git clone https://github.com/ThVinicius/Tweteroo-Orientado-a-Objetos-back-end.git
```

Vá para o diretório do projeto

```bash
  cd Tweteroo-Orientado-a-Objetos-back-end
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

</br>

## Acknowledgements

- [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>
