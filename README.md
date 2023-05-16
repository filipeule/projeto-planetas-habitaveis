# PROJETO PLANETAS HABITÁVEIS

Este projeto foi feito no desenvolvimento do curso [NodeJS - Zero to Maestry](https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/) com o auxílio do professor [Andrei Neagoie](https://www.linkedin.com/in/andreineagoie/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ca).
Nele, utilizamos os dados da Missão Kepler, da Nasa, para encontrar possíveis **exoplanetas**, ou seja, planetas que podem possivelmente ter ou receber vida como conhecemos aqui na Terra.

Para isso, utilizamos um arquivo .csv gerado pelo site da missão, contendo todos os registros de todos os planetas que a nave da missão observou, como o raio do planeta, a quantidade de insolação que ele recebe, etc.
Para ler esse arquivo e converter seus dados para tipo *object* do Javascript, utilizamos dois módulos principais: o **fs** e o **csv-parse**
Com isso, podemos utilizar a função *createReadStream* do módulo fs, que vai criar uma Stream dos dados, passando por um pipe, que será responsável por converter esses dados para objeto.

Foi muito interessante e de grande aprendizado, pois nesse projeto prático aprendi melhor sobre Streams e a melhor forma de lidar com os vários fluxos de dados que podemos ter. Agradeço ao curso *NodeJS - Zero to Maestry* e ao professor **Andrei Neagoie**, pela forma de como as aulas foram ministradas