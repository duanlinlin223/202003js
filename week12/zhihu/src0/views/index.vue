<template>
    <div class="mainPage">
        <div>
            <!-- 用于显示index中最外一层组件路由配置中children的路由配置 -->
            <router-view></router-view>
        </div>
        <div class="navBox">
            <div>
                <router-link to="/home">
                    <i class="iconfont icon-11"></i>
                    <div>首页</div>
                </router-link>
            </div>
            <div>
                <router-link to="/vip">
                    <i class="iconfont icon-huiyuan-"></i>
                    <div>会员</div>
                </router-link>
            </div>
            <div>
                <i class="iconfont icon-yingyong-"></i>
            </div>
            <div>
                <router-link to="/notify">
                    <i class="iconfont icon-tongzhi"></i>
                    <div>通知</div>
                </router-link>
            </div>
            <div>
                <router-link to="/user">
                    <i class="iconfont icon-icon-user"></i>
                    <div>我的</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
//div是显示的子路由，给下面的导航留个空间；
.mainPage > div:nth-child(1) {
    padding-bottom: 18vw;
}
.navBox {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 18vw; //1vw相当于屏幕的1%
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    div {
        flex: 1; //让几个div平分整个宽度
        a {
            color: #333;
            i {
                font-size: 7vw;
                font-weight: 800;
            }
        }
        i {
            font-size: 9vw;
        }
        a.router-link-active {
            color: red;
        }
    }
}
</style>
