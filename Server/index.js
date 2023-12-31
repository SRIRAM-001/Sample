const {Pool } = require('pg');
const express = require('express');
const cors = require('cors')
const keys = require('./keys')
const dotenv = require('dot-env')


const app = express();
app.use(express.json());
app.use(cors())


const getDetails = async(req,res) => {
    const {postid,userid,title,content} = req.query;
    const query = `insert into posts values ($1,$2,$3,$4) returning *`
    const values = [postid,userid, title, content];

    const result = await pool.query(query, values);
    console.log(result);
}

app.get('/getDetails',getDetails)
//noapp.use('/postDetails',)
app.get('/',(req,res)=>{
    console.log("asdfs");
    res.status(200).json({
        'hi':"welcome"
    })
})

const pool = new Pool({
  user: keys.PGuser,
  host: keys.PGhost,
  database: keys.PGdatabase,
  password: keys.PGpassword,
  port: keys.PGport,
})

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to database:', res.rows[0].now);
  }
  // Release the client back to the pool
  
});

// pool.query('SELECT * FROM posts',(err,res)=>{
//     if (err) {
//     console.error('Error executing query', err);
//   } else {
//     console.log('Connected to database:', res.rows);
//   }
//   //
// })

app.listen(5000,()=>{
    console.log("listening")
})



