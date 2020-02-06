import UrunListesi from "./components/UrunListesi"
import UrunGiris from "./components/UrunGiris"
import UrunCikis from "./components/UrunCikis"
import Navbar from "./components/Navbar"
import Footbar from "./components/Footbar"
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/index.html",
        redirect: "/"
    },
    {
        path: '/', name: 'urunlistesi', components: {
            default: UrunListesi,
            'navbar': Navbar,
            'footbar': Footbar
        }


    },
    {
        path: '/urun-islemleri', name: 'urunislemleri', components: {
            default: UrunGiris,
            'navbar': Navbar,
            'footbar': Footbar
        }
    },
    {
        path: '/urun-cikisi', name: 'uruncikisi', components: {
            default: UrunCikis,
            'navbar': Navbar,
            'footbar': Footbar
        }
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history',
})