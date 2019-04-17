<template>
    <transition name="toast-pop">
        <div class="toast" v-show="visible">
            <i v-if="msgType!=''" class="toast-icon" :class="'toast-icon-'+msgType"></i>
            <span class="toast-text">{{message}}</span>
        </div>        
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        props: {
            message: String,
            msgType: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
.toast{
    max-width: 80%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    transform: translate(-50%, -50%);
    transition: opacity .3s linear;
    padding: 12px 20px;
    position: fixed;
    top: 40%;
    left: 50%;
    z-index: 1000;
}
.toast-icon {
    display: block;
    width: 70px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    margin: 0 auto;
}
.toast-icon-success{
    background-image: url('./toast-success.png');
}
.toast-icon-error{
    background-image: url('./toast-error.png');
}
.toast-text {
    display: block;
    font-size: 16px;
    text-align: center;
}
.toast-pop-enter,
.toast-pop-leave-active {
  opacity: 0;
}
</style>