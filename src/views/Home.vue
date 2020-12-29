<template>
  <div class="Home" :style="{background: globalColor.$htmlBg.value, color: globalColor.$baseFontColor.value }">
    <transition name="slide-fade" appear>
      <menu-list></menu-list>
    </transition>
    <transition name="component-fade" mode="out-in" appear>
      <keep-alive v-if="glrl">
        <component :is="currentComponent"></component>
      </keep-alive>
      <component v-if="!glrl" :is="currentComponent"></component>
    </transition>
  </div>
</template>

<script>
import menuList from '@/components/menuList'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    menuList
  },
  computed: {
    globalColor: function () {
      return this.$store.state.globalColor;
    },
    selectItem: function () {
      return this.$store.state.selectItem;
    },
    currentComponent: function () {
      return this.$store.state.menuList[this.selectItem.index].module
    },
    glrl: function () {
      return !this.$store.state.reload;
    }
  },

}
</script>

<style lang="scss">
$W : 100vw;
$H:100vh;
.Home{
  width: $W;
  height: $H;
  display: flex;
  justify-content: center;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: all .3s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
