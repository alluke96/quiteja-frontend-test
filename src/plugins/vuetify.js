import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import pt from 'vuetify/lib/locale/pt'

Vue.use(Vuetify)

const opts = {
    lang: {
        locales: { pt },
        current: 'pt'
    }
}

export default new Vuetify(opts)