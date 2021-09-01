# film-api

## Índice
  1. [Descrição](#description)
  2. [Tecnologias](#techs)
  3. [Rotas](#rotes)
  4. [Como Rodar](#run)

<div id='description' />

## Descrição

Desenvolvido na disciplina de desenvolvimento web 2, o trabalho consistiu em desenvolver uma API REST capaz de realizar o CRUD de uma entidade, nesse caso um filme, respeitando a arquitetura proposta no projeto. Além disso, deve ser possível armazenar os dados em banco de dados e em memória.

Desenvolvida utilizando conceitos de DDD e clean architecture, de maneira a deixar o código o mais desacoplado possível.

Assim foram criadas as  camadas:
    Domain: Lida com as entidades e os usecases (core da aplicação);
    Infra: Lida com a utilização de bibliotecas externas;
    Data: Lida com a manipulação dos dados que interagem com a aplicação;
    Presentation: Lida com a apresentação dos dados; 
    Main: Camada que da vida a aplicação;

Alguns Design Patterns utilizados: Factory e Adapter.

A entidade filme deve possuir pelo menos 5 campos, sendo um deles um array. Assim cada filme armazenado no banco de dados possui os campos id, titulo, ano, pais e gêneros (array), além dos campos created_at, updated_at.

<div id='techs' />

## Tecnologias

[Node](https://nodejs.org/en/)

[Express](https://expressjs.com/pt-br/)

[Typescript](https://www.typescriptlang.org/)

[Sqlite](https://www.sqlite.org/index.html)

[Sequelize](https://sequelize.org/)

<div id='rotes' />

## Rotas

| Função | Método | Caminho | Corpo da Request | 200 |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| Criar filme | POST | http://localhost:3000/movie | {"title":"Blade", "year":"2000", "genres":["Action", "Sci-Fi", "Thriller"], "country":"United States"} | {"id": 5,"title": "Blade","year": "2000","country": "United States","updatedAt": "2021-08-12T21:29:01.404Z","createdAt": "2021-08-12T21:29:01.404Z","genres": [{"id": 1,"type": "Action","createdAt": "2021-08-11T00:38:24.300Z","updatedAt": "2021-08-11T00:38:24.300Z"},{"id": 4, "type": "Sci-Fi","createdAt": "2021-08-11T00:42:45.832Z","updatedAt": "2021-08-11T00:42:45.832Z"},{"id": 5,"type": "Thriller","createdAt": "2021-08-11T00:42:45.999Z","updatedAt": "2021-08-11T00:42:45.999Z"}]}
| Alterar filme | PUT | http://localhost:3000/movie/:id | algum campo editável (tutilo, ano, genero...) | {"id": 5,"title": "Blade","year": "2000","country": "United States","updatedAt": "2021-08-12T21:29:01.404Z","createdAt": "2021-08-12T21:29:01.404Z","genres": [{"id": 1,"type": "Action","createdAt": "2021-08-11T00:38:24.300Z","updatedAt": "2021-08-11T00:38:24.300Z"},{"id": 4, "type": "Sci-Fi","createdAt": "2021-08-11T00:42:45.832Z","updatedAt": "2021-08-11T00:42:45.832Z"},{"id": 5,"type": "Thriller","createdAt": "2021-08-11T00:42:45.999Z","updatedAt": "2021-08-11T00:42:45.999Z"}]}
| Deletar filme | DELETE | http://localhost:3000/movie/:id | no body | {}
| Buscar filme por id | GET | http://localhost:3000/movie/:id | no body | {"id": 5,"title": "Blade","year": "2000","country": "United States","updatedAt": "2021-08-12T21:29:01.404Z","createdAt": "2021-08-12T21:29:01.404Z","genres": [{"id": 1,"type": "Action","createdAt": "2021-08-11T00:38:24.300Z","updatedAt": "2021-08-11T00:38:24.300Z"},{"id": 4, "type": "Sci-Fi","createdAt": "2021-08-11T00:42:45.832Z","updatedAt": "2021-08-11T00:42:45.832Z"},{"id": 5,"type": "Thriller","createdAt": "2021-08-11T00:42:45.999Z","updatedAt": "2021-08-11T00:42:45.999Z"}]}
| Buscar filmes | GET | http://localhost:3000/movi | no body | [{"id": 5,"title": "Blade","year": "2000","country": "United States","updatedAt": "2021-08-12T21:29:01.404Z","createdAt": "2021-08-12T21:29:01.404Z","genres": [{"id": 1,"type": "Action","createdAt": "2021-08-11T00:38:24.300Z","updatedAt": "2021-08-11T00:38:24.300Z"},{"id": 4, "type": "Sci-Fi","createdAt": "2021-08-11T00:42:45.832Z","updatedAt": "2021-08-11T00:42:45.832Z"},{"id": 5,"type": "Thriller","createdAt": "2021-08-11T00:42:45.999Z","updatedAt": "2021-08-11T00:42:45.999Z"}]}]


<div id='run' />

## Como rodar

Primeiro clone o projeto:

```bash
> git clone https://github.com/raphaelvaz/film-api.git
```
Depois entre na pasta via terminal:

```bash
> cd /film-api
```
Instale todas as dependências:

```bash
> yarn
```

Depois rode: 
```bash
> yarn dev
```

Acesse as rotas da api através do endereço:
```bash
> http://localhost:3000
```