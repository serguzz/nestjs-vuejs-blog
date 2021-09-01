<template>
    <div class="text-center">
        <div class="col-sm-12">
      <h4 style="margin-top: 30px;"><small><button class="btn btn-success" v-on:click="navigate()"> View All Posts </button></small></h4>
      <hr>
      <img src="http://localhost:3000/images/blog/tenerife.jpg" >
      <h2>{{ post.title }} </h2>
      <h5><span class="glyphicon glyphicon-time"></span>  Post by {{post.author}}, {{post.date_posted}}.</h5>
      <p> {{ post.body }} </p>
      <p> {{ post.img }} </p>
  
    </div>
    </div>
</template>

<style>
  img {
    max-width: 100%;
  }
</style>

<script>
import { server } from "../../utils/helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      post: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get(`${server.baseURL}/blog/post/${this.id}`)
        .then(data => (this.post = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>

