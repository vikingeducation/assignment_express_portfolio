'use strict';

let express = require('express');
let app = express();

app.get('/', (req, res) => console.log('working'));
