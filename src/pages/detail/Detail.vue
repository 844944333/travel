<template>
    <div>
        <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></DetailBanner>
        <DetailHeader></DetailHeader>
        <DetailList :list="list"></DetailList>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            list: [],
            sightName: "",
            bannerImg: "",
            gallaryImgs: [],
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('http://localhost:8080/mock/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data;
                this.sightName = data.sightName;
                this.bannerImg = data.bannerImg;
                this.gallaryImgs = data.gallaryImgs;
                this.list = data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    },
    // 重复请求 加上mounted的请求会请求两次
    activated () {
        this.getDetailInfo()
    }

}
</script>

<style lang="stylus" scoped>
.content
    height 50rem
    overflow auto
</style>