var Song = require('../models/Song')

// module.exports
//
// Get songs
module.exports.index = function(callback, limit){
	Song.find(callback).limit(limit).sort([['title', 'ascending']]);
}

// Get song
module.exports.show = function(id, callback){
	Song.findById(id, callback);
}

// Add Song
module.exports.post = function(song, callback){
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
module.exports.put = function(id, song, options, callback){
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
