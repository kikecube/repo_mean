var fs = require("fs");
var buf = Buffer.alloc(1024);

fs.open('./hola.txt', 'r+', (err,fd)=>{
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to truncate the file after 10 bytes");

    fs.ftruncate(fd, 10, (err)=>{
        if (err){
            console.log(err);
        }
    })
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
           console.log(err);
        }

        // Print only read bytes to avoid junk.
        if(bytes > 0){
           console.log(buf.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function(err){
           if (err){
              console.log(err);
           } 
           console.log("File closed successfully.");
        });
     });


 });