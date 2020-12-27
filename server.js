const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: "정성현",
      birthdate: "970510",
      gender: "male",
      occupation: "student"
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: "남동호",
      birthdate: "950829",
      gender: "male",
      occupation: "blockchain developer"
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: "최민성",
      birthdate: "950413",
      gender: "male",
      occupation: "naver webtoon developer"
    },
    {
      id: 4,
      image: 'https://placeimg.com/64/64/4',
      name: "이지원",
      birthdate: "970102",
      gender: "male",
      occupation: "frontend developer and designer"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
