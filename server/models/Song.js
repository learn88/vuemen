var mongoose = require('mongoose');
// import mongoose from 'mongoose'
// Song Schema
var songSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	artist:{
		type: String,
		required: true
	},
	genre:{
		type: String
	},
	album:{
		type: String
	},
	albumImageUrl:{
		type: String,
		required: true
	},
	youtubeId:{
		type: String
	},
	lyrics:{
		type: String
	},
	tab:{
		type: String
	},
	createdAt:{
		type: Date,
		default: Date.now
	},
});

// module.exports = mongoose.model('Song', songSchema)


//
var Song = module.exports = mongoose.model('Song', songSchema);
//
// Get songs
module.exports.getSongs = function(callback, limit){
	Song.find(callback).limit(limit).sort([['title', 'ascending']]);
}

// Get song
module.exports.getSongById = function(id, callback){
	Song.findById(id, callback);
}

// Add Song
module.exports.addSong = function(song, callback){
	var add = {
		title: song.title,
		artist: song.artist,
		genre: song.genre,
		album: song.album,
		albumImageUrl: song.albumImageUrl,
		youtubeId: song.youtubeId,
		lyrics: song.lyrics,
		tab: song.tab
	}
	Song.create(add, callback);
}

// Update Song
module.exports.updateSong = function(id, song, options, callback){
	var query = {_id: id};
	var update = {
		title: song.title,
		artist: song.artist,
		genre: song.genre,
		album: song.album,
		albumImageUrl: song.albumImageUrl,
		youtubeId: song.youtubeId,
		lyrics: song.lyrics,
		tab: song.tab
	}
	Song.findOneAndUpdate(query, update, options, callback);
}
