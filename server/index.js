const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const excelToJson = require('convert-excel-to-json');
// const da = excelToJson({
//     sourceFile: "back/Book.xlsx"
// });
// console.log(da);

// app.get('/data',()=>{
//     res.send(da);
// })
// app.listen(3001);
// // // const odbc = require('odbc');

// // // async function queryExcelOnline() {
// // //     const connection = await odbc.connect(`DSN=CData ExcelOnline Source`);
// // //     const data = await connection.query('SELECT Id, Column1 FROM Test_xlsx_Sheet1');
// // //     console.log(data);
// // // }

// // // queryExcelOnline();
// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const creds = require('./config/milan.json'); // the file saved above
// const doc = new GoogleSpreadsheet('1tum5iFWq69SBB6iEwd-6S19jb3gOcvOTwF3-B4w8RYk');
// async function something(){
//     await doc.useServiceAccountAuth(creds);
//     await doc.loadInfo();
//     const sheet = await doc.addSheet({ headerValues: ['name', 'email'] });

// // append rows
// const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
// const moreRows = await sheet.addRows([
//   { name: 'Sergey Brin', email: 'sergey@google.com' },
//   { name: 'Eric Schmidt', email: 'eric@google.com' },
// ]);

// // read rows
// const rows = await sheet.getRows(); // can pass in { limit, offset }
// // read/write row values
// console.log(rows); // 'Larry Page'
//     // await sheet.loadCells('A1:E10'); // loads a range of cells
//     // console.log(sheet.getCell(1,0).value); // total cells, loaded, how many non-empty
// }
// something()
app.use(cors())
const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
    keyFile: "./config/milan.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
 
// async function something(){
//    const client = await auth.getClient();

//   // Instance of Google Sheets API
//   const googleSheets = google.sheets({ version: "v4", auth: client });

//   const spreadsheetId = "1tum5iFWq69SBB6iEwd-6S19jb3gOcvOTwF3-B4w8RYk";

//   // Get metadata about spreadsheet
//   const metaData = await googleSheets.spreadsheets.get({
//     auth,
//     spreadsheetId,
//   });

//   // Read rows from spreadsheet
//   const getRows = await googleSheets.spreadsheets.values.get({
//     auth,
//     spreadsheetId,
//     range: "Sheet2",
//   });
//   const arr = getRows.data.values
//   var keys = arr[0];

//     //vacate keys from main array
//     var newArr = arr.slice(1, arr.length);

//     var formatted = [],
//     data = newArr,
//     cols = keys,
//     l = cols.length;
//     for (var i=0; i<data.length; i++) {
//             var d = data[i],
//                     o = {};
//             for (var j=0; j<l; j++)
//                     o[cols[j]] = d[j];
//             formatted.push(o);
//     }
//     console.log(formatted)
// }
const Culti = []
const Techy = ['CP CONTEST',]
const SportsB =[]
const SportsG = []
app.get('/data/techy',async (req,res)=>{
    const client = await auth.getClient();
    var dat ={}
    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });
  
    const spreadsheetId = "1tum5iFWq69SBB6iEwd-6S19jb3gOcvOTwF3-B4w8RYk";
   Techy.map(async (Tech)=>{
// Get metadata about spreadsheet
    // const metaData = await googleSheets.spreadsheets.get({
    //   auth,
    //   spreadsheetId,
    // });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: Tech,
      });
      const arr = getRows.data.values
      var keys = arr[0];
    
        //vacate keys from main array
        var newArr = arr.slice(1, arr.length);
        
        var formatted = [],
        data = newArr,
        cols = keys,
        l = cols.length;
        for (var i=0; i<data.length; i++) {
                var d = data[i],
                        o = {};
                for (var j=0; j<l; j++)
                        o[cols[j]] = d[j];
                formatted.push(o);
        }
      dat[Tech] = formatted;
      console.log(dat);
    })
    console.log(dat);
    setTimeout(()=>res.send(dat),1000)
    

})
app.listen(3001)