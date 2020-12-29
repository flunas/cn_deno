<template>
  <div class="base">
    <transition @before-enter="beforeEnter" @enter="enter" :css="false" appear>
      <h1 ref="i1" data-i="1">简单说明</h1>
    </transition>
    <transition @before-enter="beforeEnter" @enter="enter" appear>
      <h3 ref="i2" data-i="2">
        能力有限,无法搭建满意的后台,于是这个项目就是纯前端项目,仅仅只有页面,不涉及任何后端操作.<br />
        翻译说明:本人英语渣,一切翻译来源于谷歌翻译
      </h3>
    </transition>

    <el-row>
      <!--      设置全局语言 -->
      <transition @before-enter="beforeEnter" @enter="enter" appear>
        <el-card
          ref="i3"
          data-i="3"
          data-m="slideInLeft"
          class="card"
          shadow="hover"
        >
          语言:
          <el-switch
            :value="globalLanguage"
            @change="setGlobalLanguage"
            inactive-value="0"
            inactive-text="中文"
            inactive-color="orangered"
            active-value="1"
            active-text="英文"
            active-color="lightgray"
          ></el-switch>
        </el-card>
      </transition>

      <!--      设置是否重载 -->
      <transition @before-enter="beforeEnter" @enter="enter" appear>
        <el-card
          ref="i4"
          data-i="4"
          data-m="slideInLeft"
          class="card"
          shadow="hover"
        >
          <el-checkbox v-model="glrl">重载</el-checkbox>
        </el-card>
      </transition>

      <!--      设置全局颜色-->
      <transition @before-enter="beforeEnter" @enter="enter" appear>
        <el-card
          ref="i5"
          data-i="5"
          data-m="slideInLeft"
          class="card"
          shadow="hover"
        >
          主题:
          <el-switch
            :value="dOrN"
            @change="setDOrN"
            inactive-value="0"
            inactive-text="白天"
            inactive-color="orangered"
            active-value="1"
            active-text="夜晚"
            active-color="lightgray"
          ></el-switch>
          <el-button
            @click="setGlobalColorDrawer"
            class="btnSetGlobalColor"
            icon="el-icon-s-operation"
          ></el-button>
          <el-drawer
            title="设置全局颜色"
            :visible.sync="drawerGlobalColor.open"
            :modal="false"
          >
            <el-card
              shadow="hover"
              class="card2"
              :body-style="{ padding: '0px' }"
              v-for="(item, i) in Object.keys(globalColor)"
              :key="i"
            >
              <el-row :gutter="10">
                <el-col :span="4">
                  <el-color-picker
                    @change="setGlobalColor(item, $event)"
                    show-alpha
                    :value="globalColor[item].value"
                    :predefine="globalColor[item].preDefine"
                    style="margin-top: 4px"
                  ></el-color-picker>
                </el-col>
                <el-col
                  :span="20"
                  style="text-align: left; line-height: 48px"
                  >{{ globalColor[item].title }}</el-col
                >
              </el-row>
            </el-card>
          </el-drawer>
        </el-card>
      </transition>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/menuList.vue'

export default {
  name: "Jdsm",
  data() {
    return {};
  },
  computed: {
    selectItem: function () {
      return this.$store.state.selectItem;
    },
    dOrN: function () {
      return `${this.$store.state.dOrN}`;
    },
    globalColor: function () {
      return this.$store.state.globalColor;
    },
    drawerGlobalColor: function () {
      return this.$store.state.drawer.globalColor;
    },
    globalLanguage: function () {
      return `${this.$store.state.globalLanguage}`; //由于 value 这里只接受string 值,只能是转换成 string,不知道为什么不能接受 number 值.这里也可以用三母运算实现,就是不知道那种比较好,这里就偷懒
    },
    glrl: {
      get() {
        return this.$store.state.reload;
      },
      set(v) {
        this.$store.commit("setReload", v);
      },
    },
  },
  methods: {
    afterEnter: function (el) {
      el.style.opacity = 1;
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      let delay = el.dataset.i * 100;
      let method = el.dataset.m ? el.dataset.m : "fadeInUp";
      setTimeout(() => {
        el.style.animation = `${method} .3s linear 0s 1 normal`;
        el.style.opacity = 1;
        done();
      }, delay);
    },
    // 设置全局白天或夜晚
    setDOrN: function (v) {
      this.$store.commit("setDOrN", parseInt(v));
    },
    // 设置全局颜色
    setGlobalColor: function (i, v) {
      this.$store.commit("setGlobalColor", { name: i, value: v });
    },

    // 设置drawer-全局颜色
    setGlobalColorDrawer: function () {
      this.$store.commit(
        "setGlobalColorDrawer",
        !this.setGlobalColorDrawer.open
      );
    },
    // 设置全局语言
    setGlobalLanguage: function (num) {
      this.$store.commit("setGlobalLanguage", parseInt(num));
    },
  },
  beforeMount() {
    // 设置全局语言
    let gl = localStorage.getItem("gl");
    if (gl != null) {
      this.$store.commit("setGlobalLanguage", parseInt(gl));
    }

    //  设置更新全局语言时是否重载
    let glrl = localStorage.getItem("glrl");
    if (glrl != null) {
      this.$store.commit("setReload", glrl !== "false");
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  user-select: none;
}

h1,
h3 {
  display: block;
}

.setting {
  box-sizing: border-box;
  border: 1px solid #efefef;
  background: #efefef;
  margin: 10px 10px 0 0;
  padding: 10px;
  border-radius: 6px;
  display: inline-block;

  button {
    font-size: 1rem;
  }
}

.card {
  display: inline-block;
  margin: 20px 20px 20px 0;
  border: 1px solid #efefef;
  border-radius: 10px;
  background: #efefef;
}

.btnSetGlobalColor {
  border: none;
  background: none;
  padding: 0;
  margin-left: 20px;
  font-size: 1rem;
}

.card2 {
  text-align: center;
  margin: 20px;
  border: 1px solid #efefef;
  border-radius: 6px;
  background: #efefef;

  &:first-child {
    margin-top: 10px;
  }
}
</style>
