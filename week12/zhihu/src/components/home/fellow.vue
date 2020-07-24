<template>
    <div class="fellow">
        <van-tabs v-model="active" type="card" @change="getList">
            <van-tab v-for="item in arr" :key="item.type" :title="item.title">
                <my-item v-for="(a,b) in hotlist" :key="a.type" :data="a" :index="b"></my-item>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import { mapState } from "vuex";
import item from "./item.vue";
export default {
    name: "fellow",
    data() {
        return {
            active: 0,
            arr: [
                {
                    title: "推荐",
                    type: "tuijian"
                },
                {
                    title: "科技",
                    type: "keji"
                },
                {
                    title: "教育",
                    type: "jiaoyu"
                },
                {
                    title: "娱乐",
                    type: "yule"
                },
                {
                    title: "汽车",
                    type: "qiche"
                },
                {
                    title: "金融",
                    type: "jinrong"
                },
                {
                    title: "体育",
                    type: "tiyu"
                }
            ],
            oldType: "",
            flag: true
        };
    },
    components: {
        "my-item": item
    },
    created() {
        // 在created
        this.getList();
        //给window绑定onscroll事件
        window.onscroll = () => {
            //onscroll事件：只要滚动就执行，
            //在这行之前如果条件不满足，不让getMore执行；
            if (!this.flag) return;
            this.getMore();
            //flag = false;
        };
    },
    methods: {
        // created==>methods==> dispatch（actions中的方法）==> actions中的方法引用了api请求接口的方法，并且把请求回来的数据传给了commit===> commit提交了mutations中的方法，从而让vuex中的数据发生改变；
        getList() {
            // dispatch 传递的参数是actions中的方法
            // commit 传递的参数是mutations中的方法
            this.$store
                .dispatch("getHotList", {
                    //这个对象就是配置的请求的参数,首先会传给actions中的方法，然后通过actions的方法再传递给请求的方法，然后传给了api中接口的方法，最后传给了http.get方法
                    // 这个对象传给了action中的方法
                    // newType : 传递的是
                    // 下拉刷新的功能；懒加载；每次请求请求10条数据；
                    newType: this.arr[this.active].type,
                    oldType: this.oldType, // 上一次请求的type传给后台；
                    count: 10,
                    reload: true,
                    cur_step: 0,
                    category: this.arr[this.active].type
                })
                .then(() => {
                    //dispatch返回一个promise实例，可以直接跟.then
                    //当数据请求成功以后，把flag改为true
                    this.flag = true;
                });
            //把点击的这次最新的type给了oldType
            this.oldType = this.arr[this.active].type;
        },
        //下拉刷新的方法
        getMore() {
            // 拉动滚动条，当滚动条距离页面50px;再次发送请求；
            let winH = document.documentElement.clientHeight;
            let scroT = document.documentElement.scrollTop;
            let app = document.getElementById("app");
            console.log(app.clientHeight);
            if (app.clientHeight < winH + scroT + 50) {
                //只要进来发了一次请求，立即将flag变为false
                this.flag = false;
                this.getList();
            }
        }
    },
    computed: {
        //把store中的数据通过mapState的方法遍历到当前组件上
        ...mapState(["hotlist"])
    }
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