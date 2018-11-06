const express = require('express');
const router = express.Router();
const environment = 'development';
const config = require("../../knexfile.js")[environment];
const knex = require("knex")(config);


const async = require('async');

router.get('/testdb', (req, res) => {
	knex('test_table').limit(3).then((data) => {
		knex('img_object').where('id', 'title').then((count) => {
			res.status(200).json({
				data,
				count: count.length
			});
		})
	})
});


router.get('/adddb', (req, res) => {
	t = ''
	for (var i = 0; i < 10; i++) {
		t += String.fromCharCode(parseInt(Math.random() * 100))
	}
	knex('test_table').insert({ title: t })
});

module.exports = router;
