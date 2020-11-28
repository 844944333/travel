export default {
    read () {
        return JSON.parse(window.localStorage.getItem("keyCity"))
    },
    save (value) {
        return window.localStorage.setItem("keyCity", JSON.stringify(value))
    }
}