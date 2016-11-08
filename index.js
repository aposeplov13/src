import express from 'express';
import cors from 'cors';

import repname from './repname'

const app = express();
app.use(cors());
app.get('/task2Bv2', (req, res) => {
var url = req.query.fullname;

res.send(repname(url).toString());
  
});

app.listen(3000, () => {
  console.log('2Bv2 v1');
});
