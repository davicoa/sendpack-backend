yarn init
yarn install

////mysql
yarn add express
yarn add mysql
yarn add nodemon
yarn add body-parser

yarn add sequelize
yarn add cors


yarn add mysql2
npx sequelize-cli init
npx sequelize-cli model:generate --name Users --attributes name:string,last_name:string,email:string,password:string
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name user

npx sequelize-cli db:seed:all