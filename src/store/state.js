import localStorage from '../localStorage'

let defaultCity = "北京"
try {
    if (localStorage.read) {
        defaultCity = localStorage.read()
    }
} catch (e) {}

export default {
    city: defaultCity
}