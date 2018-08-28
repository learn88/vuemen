<template>
  <div>
    <p>{{song.title}}</p>
    <p>{{song._id}}</p>
    <p>{{song.artist}}</p>
    <p>{{song.album}}</p>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.song = (await SongsService.show(id)).data
  }
}
</script>

<style scoped>
</style>
