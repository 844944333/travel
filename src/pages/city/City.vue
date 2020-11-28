<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch :cities="cities"></CitySearch>
        <CityList :letter="letter" :cities="cities" :hotCities="hotCities"></CityList>
        <CityAlphabet @change="handlerLetterChange" :cities="cities"></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Serach'
import CityList from '@/pages/city/components/List'
import CityAlphabet from '@/pages/city/components/Alphabet'
export default {
    name: "City",
    data () {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    components: { CityHeader, CitySearch, CityList, CityAlphabet },
    mounted () {
        axios.get('http://localhost:8080/mock/city.json').then(res => {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        })
    },
    methods: {
        handlerLetterChange (letter) {
            this.letter = letter
        }
    }
}
</script>

<style scoped>

</style>