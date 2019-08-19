import app from './app';
// import * as https from 'https';
import * as http from 'http';
const PORT = 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});