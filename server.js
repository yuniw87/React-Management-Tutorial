const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : '1',
            'image' : 'https://placeimg.com/64/64/any',
            'name' : '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id' : '2',
            'image' : 'https://placeimg.com/64/64/any',
            'name' : '아무게',
            'birthday': '971122',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id' : '3',
            'image' : 'https://placeimg.com/64/64/any',
            'name' : '뭐라는거',
            'birthday': '901512',
            'gender': '남자',
            'job': '대학생'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on Port ${port}`));