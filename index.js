const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['a5sd4f5as4df5a4sdf54'],
  })
);

app.use(authRouter);

app.listen(3001, () => {
  console.log('Listening');
});
