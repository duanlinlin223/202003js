<template>
    <div class="itemBox">
        <div class="numBox">{{index+1}}、</div>
        <div class="contentBox">
            <h4>{{data.title}}</h4>
            <p>{{data.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "item",
    data() {
        return {};
    },
    props: ["data", "index"]
};
</script>
<style lang='less' scoped>
.itemBox {
    display: flex; //让子元素浮动起来
    border-bottom: 1px solid #eee;
    padding: 2vw 0;
    margin: auto;
    width: 90vw;
    .numBox {
        width: 6vw;
    }
}
</style>