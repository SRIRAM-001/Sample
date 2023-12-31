
require('dotenv').config({path:'../Server/variables.env'}); // Load environment variables from .env file

const dbConfig = {
    PGuser: 'postgres',
    PGhost: 'localhost',
    PGdatabase: 'Sample',
    PGpassword: 'srirs1005',
    PGport: 5433
};


// You can now use dbConfig object to access the loaded environment variables
console.log(dbConfig.PGuser,"sdfsdfsf",process.env.PGhost);
console.log(dbConfig.PGpassword);