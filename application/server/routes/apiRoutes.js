const express = require('express');
const router = express.Router();
const environment = 'development';
const config = require("../../knexfile.js")[environment];
const knex = require("knex")(config);


const async = require('async');

router.get('/testdbapi', (req, res) => {
	knex('test_table').limit(3).then((data) => {
			res.status(200).json({
				data
			});
	})
});


router.get('/adddb', (req, res) => {
	t = ''
	for (var i = 0; i < 10; i++) {
		t += String.fromCharCode(parseInt(Math.random() * 58)+64)
	}
	knex('test_table').insert({ title: t }).then(
		res.status(200).json({
				msg: 'success'
			})
		)
});

module.exports = router;
