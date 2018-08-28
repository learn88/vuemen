import Api from '@/services/Api'

export default {
  index (songs) {
    return Api().get('songs', songs)
  },
  show (id) {
    return Api().get(`songs/${id}`)
  },
  post (song) {
    return Api().post('songs', song)
  },
  put (song) {
    return Api().put(`songs/${song._id}`, song)
  }
}
