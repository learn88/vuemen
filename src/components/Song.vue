<template>
  <div>
    <ul v-for="song in songs" :key="song._id">
      <li>{{song.title}}</li>
      <li>{{song._id}}</li>
      <li>{{song.artist}}</li>
      <li>{{song.album}}</li>
      <!-- <li> <button type="button" @click="router.push('song-edit', song._id)">Edit</button> </li> -->
    </ul>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  name: 'Song',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
