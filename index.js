const puppeteer = require('puppeteer');




(async () =>{
  let url = 'https://www.flashscore.com.br/equipe/luverdense-mt/bLywEGoh/resultados/';

  let browser = await puppeteer.launch({headless: false});
  let page = await browser.newPage();

  await page.goto(url, {waituntil: 'networkidle2'});


  let data = await page.evaluate(() => {
    let tudo = document.querySelector('div[class="event__score event__score--home"]').innerText;

    return {
      tudo
    }
  });

  console.log(data);

  debugger;

  await browser.close();
})();

