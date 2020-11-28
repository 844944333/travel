<template>
    <div id="app">
        <!-- exclude作用让Detail组件不缓存数据  exclude="Detail" -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style scoped>

</style>