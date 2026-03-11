const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

const port = 3000;

let transactions = [
    { id: 1, amount: 100, description: 'test' }
]

app.get('/api/transactions', (req, res) => {
    res.status(201).json(transactions);
})

app.post('/api/transactions', (req, res) => {
    console.log(req.params)
    const newTransaction = {
        id: transactions.length + 1,
        amount: req.body.amount,
        description: req.body.description
    }

    transactions.push(newTransaction);

    res.status(201).json(newTransaction)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})