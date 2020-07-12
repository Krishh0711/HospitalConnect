const express = require('express');
const cookieParser =  require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require("body-parser")
const passportJWT = require('./config/passport-jwt-strategy');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//used for session work
// const session = require('express-session');
const passport =  require('passport');
// const passportLocal = require('./config/passport-local-strategy');


app.use(express.urlencoded());

app.use(cookieParser());

//mongo store is used to store the session cookie in the db 
// app.use(session({
//   name: 'nodejsauth',
//   secret: 'blahsomething',
//   saveUninitialized: false,
//   resave:false,
//   cookie:{
//     maxAge: (1000*60* 100)
//   },
//   store: new mongoStore(
//     {
//    mongooseConnection:db,
//    autoRemove: 'disabled'
//     },
//     function(err){
//       console.log(err || 'connect-mongodb setup ok');
//     }
//   )
// }));

app.use(passport.initialize());
app.use(passport.session());

// app.use(passport.setAuthenticatedUser);

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
  if(err){
      console.log(`Error in running the server: ${err}`); //interpolation -> concat variable in  string
  }

  console.log(`Server is running on port: ${port}`);
});