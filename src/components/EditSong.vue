<template>
  <div>
    <button type="button" href='/' name="button">Songs</button><br><br>
    <input type="text" v-model="song.title" placeholder="Title"><br><br>
    <input type="text" v-model="song.artist" placeholder="Artist"><br><br>
    <input type="text" v-model="song.genre" placeholder="Genre"><br><br>
    <input type="text" v-model="song.album" placeholder="Album"><br><br>
    <input type="text" v-model="song.albumImageUrl" placeholder="Album Image Url"><br><br>
    <input type="text" v-model="song.youtubeId" placeholder="YouTube ID"><br><br>
    <button type="button" @click="save">Edit Song</button>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  name: 'SongEdit',
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
      id: ''
      // error: null,
      // required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      // this.error = null
      // const areAllFieldsFilledIn = Object
      //   .keys(this.song)
      //   .every(key => !!this.song[key])
      // if (!areAllFieldsFilledIn) {
      //   this.error = 'Please fill in all the required fields.'
      //   return
      // }

      const id = this.$route.params.id
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            id: id
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const id = this.$route.params.id
      this.song = (await SongsService.show(id)).data
      this.id = id
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
