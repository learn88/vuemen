import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Song from '@/components/Song'
import CreateSong from '@/components/CreateSong'
import EditSong from '@/components/EditSong'
import ShowSong from '@/components/ShowSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/he',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/songs',
      name: 'songs',
      component: Song
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:id',
      name: 'song',
      component: ShowSong
    },
    {
      path: '/songs/:id/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
