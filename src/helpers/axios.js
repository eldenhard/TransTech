import Vue from "vue";
import axios from "axios";

let config = {
    baseURL: 'http://10.1.5.65/api/'
    // baseURL: '/api/'

}

const _axios = axios.create(config)


Plugin.install = function(Vue, options){
    Vue.axios = _axios;
    window.axios = _axios
    Object.defineProperties(Vue.prototype, {
        axios: {
            get(){
                return _axios
            }
        },
        $axios: {
            get(){
                return  _axios;
            }
        }
    })
}


Vue.use(Plugin);

export const api = _axios
export default Plugin