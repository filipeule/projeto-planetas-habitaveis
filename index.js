const { parse } = require('csv-parse');
const fs = require('fs');

const planetasHabitaveis = [];

function habitavel(planeta) {
   return planeta['koi_disposition'] === 'CONFIRMED' && planeta['koi_insol'] > 0.36 && planeta['koi_insol'] < 1.11 && planeta['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv')
   // pipe function connects a readable stream source to a writable stream destination
   .pipe(parse({
      comment: '#',
      columns: true
   }))
   .on('data', (dado) => {
      if (habitavel(dado)) planetasHabitaveis.push(dado);
   })
   .on('error', (err) => {
      console.log(err);
   })
   .on('end', () => {
      console.log(planetasHabitaveis.map((planeta) => {
         return planeta['kepler_name'];
      }));
      console.log(`${planetasHabitaveis.length} planetas habitáveis encontrados!`);
   });