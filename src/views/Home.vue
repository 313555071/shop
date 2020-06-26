<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CSPATH}/products`;
    // console.log(api);
    // console.log(process.env);
    // this.$http.get(api).then((response) => {
    //   console.log(response.data);
    // });
  },
};
</script>
