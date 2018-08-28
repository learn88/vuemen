var express = require('express');
// import express from 'express'
var router = express.Router();


SongsController = require('../../controllers/SongsController');
// Song = require('../../models/Song.js');

// Get All Songs
router.get('/', function(req, res){
	SongsController.index(function(err, songs){
		if(err){
			res.send(err);
		}
		res.json(songs);
	});
});

// Get Single Song
router.get('/:id', function(req, res){
	SongsController.show(req.params.id, function(err, song){
		if(err){
			res.send(err);
		}
		res.json(song);
	});
});

// Add Song
router.post('/', function(req, res){
	var song = req.body;
	SongsController.post(song, function(err, song){
		if(err){
			res.send(err);
		}
		res.json(song);
	});
});

// Update Song
router.put('/:id', function(req, res){
	var id = req.params.id;
	var song = req.body;
	SongsController.put(id, song, {}, function(err, song){
		if(err){
			res.send(err);
		}
		res.json(song);
	});
});

// Delete Song
// router.delete('/:id', function(req, res){
// 	var id = req.params.id;
// 	Song.removeSong(id, function(err, song){
// 		if(err){
// 			res.send(err);
// 		}
// 		res.json(song);
// 	});
// });

module.exports = router;
