console.log('Annyeonghaseyo');
import express from 'express'

import { Person } from "./Person.js";

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
)
router.get('^/$|/class', (req, res) => {
    res.json({
      status: res.statusCode,
      msg: 'You are home / Khuṇ xyū̀ b̂ān',
    });
})
router.get('/person1', (req, res) => {
    let person1 = new Person()
    person1.FirstName = "Namjoon"
    person1.LastName = "Kim"
    person1.Age = 29
    person1.display()
    res.end('Please check the console')
})
router.get('/person2', (req, res) => {
    let person2 = new Person();
        person2.FirstName = 'Jungkook';
        person2.LastName = 'Jeon';
        person2.Age= 27
        person2.display();
        res.end('Please check the console, please');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



















