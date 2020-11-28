<template>
    <ul class="list">
        <li class="item"
            v-for="item of letters"
            :key="item" :ref="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            timer: null,
            startY: 0
        }
    },
    updated() {
        // 获取字母A距离头部下沿的位置
        this.startY = this.$refs['A'][0].offsetTop;
    },
    computed: {
        letters () {
            const letters = [];
            let i;
            for ( i in this.cities ) {
                letters.push(i)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerHTML)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                // 节流
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    // 获取滑动的字母距离头部下沿的距离
                    const touchY = e.touches[0].clientY - 79
                    // 获取滑动的字母的索引
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit("change", this.letters[index])
                    }
                }, 50)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
        text-align center
        line-height .4rem
        color $bgColor
</style>