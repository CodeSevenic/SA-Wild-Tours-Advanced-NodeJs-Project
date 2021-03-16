const mongoose = require('mongoose');
const dotenv = require('dotenv');

// This error handlingException must come before
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! :-( Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app.js');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

// Listening port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}....`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! :-( Shutting down...');

  console.log(err.name, err.message, err);
  server.close(() => {
    process.exit(1);
  });
});
