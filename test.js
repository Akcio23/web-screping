const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://g1.globo.com/';

axios(url)
  .then(response => {
    const html = response.data; //extraindo o HTML
    const $ = cheerio.load(html); //Carregando o html 
    const newspaper  = $('h2 > a > p').length //fitrando e realizado a contagem por TAG 
    for(i=0; i <= newspaper; i++){
        console.log($(`h2 > a > p:eq(${i})`).text());
    }
    
  })
  .catch(err => {
    console.error(err);
  });
