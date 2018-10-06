var fs = require('fs');

console.log('Vamos a crear el directorio /tmp/test');

fs.mkdir('/tmp/test/kike', (err)=>{if(err){return console.error(err)}
    console.log("Directory created successfully!");
})


