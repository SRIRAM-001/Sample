

const stutablequery = `CREATE TABLE STUDENT (
        stuid INTEGER PRIMARY KEY,
        Name VARCHAR(20) NOT NULL UNIQUE,
        Password VARCHAR(20) NOT NULL UNIQUE
    )`


module.exports = stutablequery;
