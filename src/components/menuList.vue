<template>
  <div class="menu">
    <ul :style="{borderImage:menuListBorderColor}">
      <transition-group @before-enter="beforeEnter" @enter="enter" appear>
        <li :data-i="i" @click="func_selectItem(item.name,i)" v-for="(item,i) in menuList" :key="i+1" :title="item.title" @mouseenter="func_enterStyle(i,$event)" @mouseleave="func_leaveStyle(i,$event)" :style="{color:selectItem.index === i ? globalColor.$menuListFontColorActive.value : globalColor.$menuListFontColor.value}">{{item.title}}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'menuList',
  computed: {
    menuListBorderColor: function () {
      let c = this.globalColor.$menuListBorderColor.value;
      let ca = c.replace(/[rgba()\s]/g,'').split(',');
      let nc = `rgba(${ca[0]}, ${ca[1]}, ${ca[2]}, 0)`;
      return `linear-gradient(${nc}, ${c} ,${nc}) 10`;
    },
    globalColor: function () {
      return this.$store.state.globalColor;
    },
    menuList: function () {
      return this.$store.state.menuList
    },
    selectItem: function () {
      return this.$store.state.selectItem
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
    },
    enter: function (el,done) {
      let delay = Math.abs(this.selectItem.index - el.dataset.i) * 100 + 300;
      setTimeout(() => {
        el.style.animation = 'slideInRight .3s linear 0s 1 normal';
        el.style.opacity = 1;
      },delay)
      done();
    },
    func_enterStyle: function (i,e) {
      if(this.selectItem.index !== i){
        e.target.style.color = this.globalColor.$menuListFontColorHover.value;
      }
    },
    func_leaveStyle: function (i,e) {
      if(this.selectItem.index !== i){
        e.target.style.color = this.globalColor.$menuListFontColor.value;
      }
    },
    func_selectItem: function (name,index) {
      if(index !== this.selectItem.index) {
        this.$store.commit('set_selectItem', {name,index})
      }
    }
  },
  mounted() {
    this.$store.commit('set_selectItem', {name:this.selectItem.name, index:this.selectItem.index})
  }
}
</script>

<style scoped lang="scss">
*{
  user-select: none;
}
.menu{
  display: inline-block;
  align-self: center;

  ul{
    box-sizing: content-box;
    list-style: none;
    margin: 0;
    padding: 10px;
    max-width: 200px;
    height: 80%;
    border-right: 1px solid;
    border-image: linear-gradient(rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0)) 10;
    text-align: right;
    display: inline-block;
    cursor: pointer;


    li{
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover{
        color: orangered;
      }
    }
  }
}
</style>
