<template>
  <div>
    <button type="button" href='/' name="button">Songs</button><br><br>
    <input type="text" v-model="song.title" placeholder="Title"><br><br>
    <input type="text" v-model="song.artist" placeholder="Artist"><br><br>
    <input type="text" v-model="song.genre" placeholder="Genre"><br><br>
    <input type="text" v-model="song.album" placeholder="Album"><br><br>
    <input type="text" v-model="song.albumImageUrl" placeholder="Album Image Url"><br><br>
    <input type="text" v-model="song.youtubeId" placeholder="YouTube ID"><br><br>
    <button type="button" @click="create">Create Song</button>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
