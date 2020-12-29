<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  created() {
    // 从 localstorage 中读取值,非 null 则替换
    let state = JSON.parse(localStorage.getItem('cn_deno_state'));
    if(state !== null) {
      this.$store.replaceState(
          Object.assign({},
              this.$store.state,
              state
          )
      );
      this.$store.commit("setDOrN", parseInt(state.dOrN));
    }

    // 浏览器关闭或者窗口刷新或关闭时触发-将 state 存储到 localstorage
    window.addEventListener('beforeunload', () => {
      let arr = ['dOrN','globalLanguage','selectItem'];
      let ns = {}, s = this.$store.state;
      for(let i=0,j=arr.length;i<j;){
        ns[arr[i]] = s[arr[i]];

        if(++i === j){
          localStorage.setItem('cn_deno_state', JSON.stringify(ns));
        }
      }
    })
  }
}
</script>
<style lang="scss">
@import "scss/reset";
@import "scss/default";

$W : 100vw;
$H : 100vh;

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Menlo,Monaco,Lucida Console,Consolas,Liberation Mono,Courier New,monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--baseFontColor);

  width: $W;
  height: $H;
}
</style>
