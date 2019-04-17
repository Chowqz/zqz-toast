import Vue from 'vue';
import toast from './toast.vue';

const ToastConstructor = Vue.extend(toast);

ToastConstructor.prototype.close = function() {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;
    returnAnInstance(this);
}

let toastPool = [];

let getAnInstance = () => {
    if(toastPool.length > 0) {
        let instance = toastPool[0];
        toastPool.splice(0, 1);
        return instance;
    }
    return new ToastConstructor({
        el: document.createElement('div')
    });
};

let returnAnInstance = instance => {
    if(instance) {
        toastPool.push(instance);
    }
};

let removeDom = event => {
    if(event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
}

const Toast = (options = {}) => {
    let duration = options.duration || 3000;

    let instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.message = options.message || '';
    instance.msgType = options.msgType || '';
    
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        instance.timer = setTimeout(() => {
            if(instance.closed) {
                return;
            }
            instance.close();
        }, duration);
    });
    return instance;
};

export default Toast;