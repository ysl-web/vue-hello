<template>
    <div>
        子组件：{{ txt }}
    </div>
</template>

<script>
export default {
    name: 'Prop',
    props: {
        txt: String
    },
    data(){
        return{

        }
    }
}
</script>