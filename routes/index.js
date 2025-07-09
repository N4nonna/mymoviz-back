require('dotenv').config();
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
	fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`)
		.then(res => res.json())
		.then(data => {
			console.log('fetch ok');
			res.json({movies : data.results});
		})
})

module.exports = router;
