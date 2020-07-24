<!-- header -->
<template>
    <div class="header">
        <div>
            <van-icon class="lt" name="tv-o"></van-icon>
            <van-search placeholder="请输入搜索关键词"></van-search>
            <van-icon class="rt" name="calender-o"></van-icon>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {},
};
</script>
<style lang="less" scoped>
.header {
    div {
        display: flex;
        align-items: center;
        .lt,
        .rt {
            width: 13vw;
            font-size: 8vw;
        }
        > div {
            flex: auto;
        }
    }
}
</style>
