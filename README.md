## Introdução
Projetos de estudo que irá conter uma API básica de Livros fazendo CRUD, Autenticação com JWS, uso de containeres Docker, Migration e Seeds, e também automação de build com Azure DevOps.

## Funcionalidades ( TO-DO )
 - Pesquisa de livros por código (ISBN)
 - Pesquisa de livros de um autor.
 - Manutenção de livros (incluir, remover e alterar)

## Entidade Livro
Um livro possui as seguintes informações:
 - ISBN (chave primária)
 - Título
 - Autores (um ou mais)
 - Editora
 - Data de publicação
 - Preço (em reais)
 - Críticas de leitores (uma ou mais)

## Arquitetura C4 da Solução ( Estudo )
O projeto de arquitetura C4 da solução foi desenhado com o draw.io

O arquivo que contém o desenho pode ser baixado neste [link](./arquitetura.drawio).

## Execução local
Criar um arquivo .env na raiz do projeto e em seguida configurar os seguintes parâmetros:
```
PORT=Numero da porta a ser usada pela API
DB_TYPE= Tipo do banco de dados. O valor deve ser postgresql
DB_HOST=Host do banco de dados
DB_PORT=Porta do banco de dados
DB_USER=Usuário do banco de dados
DB_PASSWORD=Senha do banco de dados
DB_NAME=Nome do banco a ser usado no banco de dados
SYNCHRONIZE=Deve ser informado true ou false. Quando estiver como true o framework typeorm irá criar as tabelas de banco automáticamente. Deve ser true apenas para execução inicial ou quando houver atualização de entidades do banco.
LOGGING=Deve ser true ou false. Isso ativa o loggin do typeorm.
```

Levando em consideração que o uso do banco de dados postgresql disponível no arquivo (docker-compose.yml)[./docker-compose.yml] o arquivo .env deve ser configurado da seguinte forma:
```
PORT=3030
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USER=fake_db_username
DB_PASSWORD=fake_db_password
DB_NAME=application_db
SYNCHRONIZE=false
LOGGING=false
```

Inicialize o banco de dados utilizando o comando
```sh
docker-compose up -d
```

Após isso execute os seguintes comandos para inicializar a aplicação:
```sh
npm install
npm run start:dev
```