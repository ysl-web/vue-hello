<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="hello">get请求</button>
    <Check />

    <Prop v-bind:txt="txt" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Prop from '@/components/Prop.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Prop
  },
  data(){
    return{
      txt: '我是从父组件传递来的值123'
    }
  },
  methods:{
    hello: function(){
      this.$axios.get('/getTest', {params: {
        id: 1
      }}).then(res => {
        console.log(res.data);
      })
    }
  }
}
</script>
