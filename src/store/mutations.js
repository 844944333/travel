import localStorage from '../localStorage'
export default {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.save(city)
        } catch (e) {}
    }
}