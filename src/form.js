import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators: {
        'no-espacios' : function(value) {
            return !value.includes(' ')
        },
        'dos-palabras' : function(value) {
            return value.split(' ').length <= 2
        }        
    }
}

Vue.use(VueForm, options)
