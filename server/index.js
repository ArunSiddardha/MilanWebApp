const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const excelToJson = require('convert-excel-to-json');
 
const data = excelToJson({
    sourceFile: "back/Book.xlsx"
});
// const xlsx = require('xlsx');
// const wb = xlsx.readFile("back/Book.xlsx");
// const ws = wb.Sheets[wb.SheetNames[0]];
// const data = xlsx.utils.sheet_to_json(ws);
console.log(data);
app.use(cors())
app.get('/data',(req,res)=>{
    res.send(data);
})
app.listen(3001);
// const odbc = require('odbc');

// async function queryExcelOnline() {
//     const connection = await odbc.connect(`DSN=CData ExcelOnline Source`);
//     const data = await connection.query('SELECT Id, Column1 FROM Test_xlsx_Sheet1');
//     console.log(data);
// }

// queryExcelOnline();