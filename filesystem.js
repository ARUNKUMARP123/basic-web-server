const {writeFile,readFile} =require ("node:fs")
const path = require('path');

function callback(err){
    if(err) console.log(err);
    else console.log("File Created Successfully")

}
 function craeteFileAndWriteToFile(){
   
    const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).replace(/[/]/g, '-').replace(/[,]/g, '_').replace(/[:]/g, '-');
    writeFile(`${currentDate}.txt`, `${currentDate}`, 'utf8', callback);

}
function readFileAndPrint(){
readFile("3-24-2024_ 6-33-38 PM.txt",(err,data)=>{
        if (err) throw err;
        console.log(data.toString());
    })
}

module.exports={
    craeteFileAndWriteToFile,
    readFileAndPrint,
}