<template>
  <div>
    <input type="checkbox" id="1" value="q" v-model="checkedNames" />
    <label for="1">Jack</label>
    <input type="checkbox" id="2" value="s" v-model="checkedNames" />
    <label for="2">John</label>
    <input type="checkbox" id="3" value="d" v-model="checkedNames" />
    <label for="3">Mike</label>
    <br/>
    <span>选择了：{{checkedNames}}</span>
  </div>
</template>

<script>
export default {
    name: 'Check',
    data(){
        return{
            checkedNames: []
        }
    }
}
</script>