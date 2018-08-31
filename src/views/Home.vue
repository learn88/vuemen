<template>
  <div>
      <v-layout>
        <v-flex>

          <v-card v-for="post in posts" :key="post._id">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ post.title }}</h3>
                <span class="grey--text">{{ post.author.name }}</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn flat color="orange" v-if="isUserLoggedIn">Edit</v-btn>
              <v-btn flat color="error" v-if="isUserLoggedIn">Delete</v-btn>
            </v-card-title>
            <v-card-text>
              <span>{{ post.body }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>


    <v-btn
      fab
      bottom
      right
      color="light-blue darken-1"
      dark
      fixed
      @click="dialog = !dialog"
      v-if="isUserLoggedIn"
    >
      <v-icon>edit</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Create post
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field
                  placeholder="Title"
                  v-model="post.title"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                name="input-7-1"
                label="Body"
                v-model="post.body"
                hint="Hint text"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="create">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SamplePostService from '@/api/SamplePostService'
export default {
  data () {
    return {
      dialog: false,
      posts: null,
      post: {
        title: '',
        body: '',
        author: {
          _id: '',
          name: ''
        }
      }
    }
  },
  async mounted () {
    this.posts = (await SamplePostService.index()).data
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {
    async create () {
      this.error = null
      this.post.author._id = this.$store.state.user._id
      this.post.author.name = this.$store.state.user.name
      const areAllFieldsFilledIn = Object
        .keys(this.post)
        .every(key => !!this.post[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await SamplePostService.post(this.post)
        this.$router.push({
          name: 'home'
        })
        this.posts = (await SamplePostService.index()).data
        this.post.title = ''
        this.post.body = ''
        this.dialog = false
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
