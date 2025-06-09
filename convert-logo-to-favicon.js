const pngToIco = require('png-to-ico');
const fs = require('fs');

pngToIco('public/images/logo.png')
  .then(buf => {
    fs.writeFileSync('app/favicon.ico', buf);
    console.log('favicon.ico created successfully!');
  })
  .catch(console.error);
