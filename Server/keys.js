
require('dotenv').config({path:'../Server/variables.env'}); // Load environment variables from .env file

const dbConfig = {
    PGuser: process.env.PGuser,
    PGhost: process.env.PGhost,
    PGdatabase: process.env.PGdatabase,
    PGpassword: process.env.PGpassword,
    PGport: process.env.PGport
};


// You can now use dbConfig object to access the loaded environment variables
console.log(dbConfig.PGuser,"sdfsdfsf",process.env.PGhost);
console.log(dbConfig.PGpassword);