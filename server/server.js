const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const audioRouter = require('./routes/audio.router');
const projectsRouter = require('./routes/projects.router');
const allUsersRouter = require('./routes/allUsers.router');
const collaboratorsRouter = require('./routes/collaborators.router');
const partRouter = require('./routes/part.router');
const noteRouter = require('./routes/note.router');
const chordRouter = require('./routes/chord.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/audio', audioRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/allUsers', allUsersRouter);
app.use('/api/collaborators', collaboratorsRouter);
app.use('/api/part', partRouter);
app.use('/api/note/', noteRouter);
app.use('/api/chord/', chordRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
