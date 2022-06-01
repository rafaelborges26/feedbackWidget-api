## 💻 Objetivo Alcançado
Api com o objetivo de incluir registros para o usuário conseguir criar um feedback, sendo de um bug, ideia ou outro. com possibilidade de enviar anexos na requisição.

## ✨ Tecnologias

-   [ ] Node.js
-   [ ] Typescript
-   [ ] Express
-   [ ] Prisma
-   [ ] Migrations
-   [ ] Nodemailer


## 💻 Projeto

Widget é um projeto onde o usuário pode fazer um feedback de algum problema, ideia ou outro encontrado e anexar a evidência, após isso é realizado o envio de e-mail para o dono da plataforma, através do nodemailer.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `npx prisma migrate dev`para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3333`
