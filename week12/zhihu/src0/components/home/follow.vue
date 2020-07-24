<template>
    <div class="fellow">
        <van-tabs v-model="active" type="card">
            <van-tab
                v-for="item in arr"
                :key="item.type"
                :title="item.title"
            ></van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: "fellow",
    data() {
        return {
            active: 0,
            arr: [
                {
                    title: "推荐",
                    type: "tuijian",
                },
                {
                    title: "科技",
                    type: "keji",
                },
                {
                    title: "教育",
                    type: "jiaoyu",
                },
                {
                    title: "娱乐",
                    type: "yule",
                },
                {
                    title: "汽车",
                    type: "qiche",
                },
                {
                    title: "金融",
                    type: "jinrong",
                },
                {
                    title: "体育",
                    type: "tiyu",
                },
            ],
            oldType: "",
        };
    },
    created() {
        // 在created
        this.getList();
    },
    methods: {
        // created==>methods==> dispatch（actions中的方法）==> actions中的方法引用了api请求接口的方法，并且把请求回来的数据传给了commit===> commit提交了mutations中的方法，从而让vuex中的数据发生改变；
        getList() {
            // dispatch 传递的参数是actions中的方法
            // commit 传递的参数是mutations中的方法
            this.$store.dispatch("getHotList", {
                //这个对象就是配置的请求的参数,首先会传给actions中的方法，然后通过actions的方法再传递给请求的方法，然后传给了api中接口的方法，最后传给了http.get方法
                // 这个对象传给了action中的方法
                // newType : 传递的是
                // 下拉刷新的功能；懒加载；每次请求请求10条数据；
                newType: this.arr[this.active].type,
                oldType: this.oldType, // 上一次请求的type传给后台；
                count: 10,
                reload: true,
                cur_step: 0,
                category: this.arr[this.active].type,
            });
        },
    },
};
</script>

<style lang="less">
.fellow {
    padding-top: 3vw;
    .van-tabs__nav--card {
        border: none;
        .van-tab {
            border: none;
            border-radius: 2px;
            background: #f6f6f6;
            color: #646464;
        }
        .van-tab.van-tab--active {
            color: #0084ff;
            background: rgba(0, 132, 255, 0.1);
        }
    }
}
</style>
