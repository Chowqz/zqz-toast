<template>
    <div id="app">
        <button @click="toast">toast message</button>
    </div>
</template>

<script>
    import Toast from '../src/index.js'

    export default {
        data () {
            return {
              
            }
        },
        created() {

        },
        methods: {
            toast() {
                Toast({
                    message: '提交成功',
                    duration: 3000,
                    // msgType: 'success'
                    msgType: 'error'
                })
            }
        }
    }
</script>

<style>

</style>
