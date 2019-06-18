const express = require('express');
const graphqlHttp = require('express-graphql');

const port = 4000;
const app = express();
const schema = require('./schema.js');
const Chalk = require('chalk');
const cors = require('cors');

//app.use('/graphi',express.static(`${__dirname}/public`)); // we could have just used the `graphiql` option: https://github.com/graphql/express-graphql

app.use('/graphql', cors(), graphqlHttp(() => ({
    schema: schema,
	graphiql: true
})));
app.listen(port);
console.log(`Started on ${Chalk.underline.blue(`http://localhost:${port}/`)}`);