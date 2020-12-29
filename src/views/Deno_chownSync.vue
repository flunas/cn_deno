<template>
  <div class="base scrollbar">
    <!--  函数名区  -->
    <div class="box">
      <p class="bt" :style="{ color: globalColor.$codeTitleFontColor.value }">
        <b>
          <span class="key_function" :style="{ color: globalColor.$keyWordFontColorFunction.value }">function</span>
          Deno<span class="codeApi" :style="{ color: globalColor.$codeTitleApiFontColor.value }">.chownSync</span>(path: string | URL, uid: number | null, gid: number | null): void
        </b>
      </p>
    </div>

    <!--  功能介绍区  -->
    <div class="box">
      <div>
        <h3 :style="{ color: globalColor.$keyWordFontColorEffect.value }">
          作用
        </h3>
        <button
          @mouseenter="func_enterStyleZW"
          @mouseleave="func_leaveStyleZW(zw01, $event)"
          @click="zw01 = !zw01"
          :style="{
            color: globalLanguage
              ? zw01
                ? globalColor.$buttonChineseFontColorActive.value
                : globalColor.$buttonChineseFontColor.value
              : globalColor.$buttonChineseFontColorActive.value,
          }"
        >
          中文</button
        >|<button
          @mouseenter="func_enterStyleYW"
          @mouseleave="func_leaveStyleYW(yw01, $event)"
          @click="yw01 = !yw01"
          :style="{
            color: globalLanguage
              ? globalColor.$buttonEnglishFontColorActive.value
              : yw01
              ? globalColor.$buttonEnglishFontColorActive.value
              : globalColor.$buttonEnglishFontColor.value,
          }"
        >
          英文
        </button>
      </div>
      <p v-if="globalLanguage ? zw01 : true">
        同步更改常规文件或目录的所有者。 <br />此功能在Windows上不可用。
      </p>
      <p v-if="globalLanguage ? true : yw01">
        Synchronously change owner of a regular file or directory. <br />This functionality is not available on Windows.
      </p>
    </div>

    <!--  参数区  -->
    <div class="box">
      <div>
        <h3 :style="{ color: globalColor.$keyWordFontColorParam.value }">
          参数
        </h3>
        <button
          @mouseenter="func_enterStyleZW"
          @mouseleave="func_leaveStyleZW(zw02, $event)"
          @click="zw02 = !zw02"
          :style="{
            color: globalLanguage
              ? zw02
                ? globalColor.$buttonChineseFontColorActive.value
                : globalColor.$buttonChineseFontColor.value
              : globalColor.$buttonChineseFontColorActive.value,
          }"
        >
          中文</button
        >|<button
          @mouseenter="func_enterStyleYW"
          @mouseleave="func_leaveStyleYW(yw02, $event)"
          @click="yw02 = !yw02"
          :style="{
            color: globalLanguage
              ? globalColor.$buttonEnglishFontColorActive.value
              : yw02
              ? globalColor.$buttonEnglishFontColorActive.value
              : globalColor.$buttonEnglishFontColor.value,
          }"
        >
          英文
        </button>
      </div>
      <p v-if="globalLanguage ? zw02 : true">路径 : 字符串 | URL</p>
      <p v-if="globalLanguage ? zw02 : true">uid : 数字 | null</p>
      <p v-if="globalLanguage ? zw02 : true">gid : 数字 | null</p>
      <p v-if="globalLanguage ? true : yw02">path : string | URL</p>
      <p v-if="globalLanguage ? true : yw02">uid : number | null</p>
      <p v-if="globalLanguage ? true : yw02">gid : number | null</p>
    </div>

    <!--  返回值区  -->
    <div class="box">
      <div>
        <h3 :style="{ color: globalColor.$keyWordFontColorReturnValue.value }">
          返回值
        </h3>
        <button
          @mouseenter="func_enterStyleZW"
          @mouseleave="func_leaveStyleZW(zw03, $event)"
          @click="zw03 = !zw03"
          :style="{
            color: globalLanguage
              ? zw03
                ? globalColor.$buttonChineseFontColorActive.value
                : globalColor.$buttonChineseFontColor.value
              : globalColor.$buttonChineseFontColorActive.value,
          }"
        >
          中文</button
        >|<button
          @mouseenter="func_enterStyleYW"
          @mouseleave="func_leaveStyleYW(yw03, $event)"
          @click="yw03 = !yw03"
          :style="{
            color: globalLanguage
              ? globalColor.$buttonEnglishFontColorActive.value
              : yw03
              ? globalColor.$buttonEnglishFontColorActive.value
              : globalColor.$buttonEnglishFontColor.value,
          }"
        >
          英文
        </button>
      </div>
      <p v-if="globalLanguage ? zw03 : true">void</p>
      <p v-if="globalLanguage ? true : yw03">void</p>
    </div>

    <!--  代码块区  -->
    <div
      class="box codeBox"
      :style="{
        background: globalColor.$codeBoxBgColor.value,
        color: globalColor.$codeFontBaseColor.value,
      }"
    >
      <p class="code">
        <span
          class="key_await"
          :style="{ color: globalColor.$keyWordFontColorAwait.value }"
        ></span>
        Deno.chownSync(<span class="code_green">"myFile.txt"</span>,
        <span
          class="codeArg01"
          :style="{ color: globalColor.$codeFontColorParam.value }"
          >1000, 1002</span
        >);
      </p>
    </div>

    <!--  其他介绍区  -->
    <div class="box">
      <h3 :style="{ color: globalColor.$keyWordFontColorOther.value }">其它</h3>
      <button
        @mouseenter="func_enterStyleZW"
        @mouseleave="func_leaveStyleZW(zw04, $event)"
        @click="zw04 = !zw04"
        :style="{
          color: globalLanguage
            ? zw04
              ? globalColor.$buttonChineseFontColorActive.value
              : globalColor.$buttonChineseFontColor.value
            : globalColor.$buttonChineseFontColorActive.value,
        }"
      >
        中文</button
      >|<button
        @mouseenter="func_enterStyleYW"
        @mouseleave="func_leaveStyleYW(yw04, $event)"
        @click="yw04 = !yw04"
        :style="{
          color: globalLanguage
            ? globalColor.$buttonEnglishFontColorActive.value
            : yw04
            ? globalColor.$buttonEnglishFontColorActive.value
            : globalColor.$buttonEnglishFontColor.value,
        }"
      >
        英文
      </button>
    </div>
    
    <p v-if="globalLanguage ? zw04 : true">
      需要
      <span
        class="heibg"
        :style="{ background: globalColor.$codeProminentBgColor.value }"
        >allow-write</span
      >
      权限。
    </p>
    <p v-if="globalLanguage ? zw04 : true">如果在Windows上执行则抛出错误（未实现）</p>
    <p v-if="globalLanguage ? zw04 : true">参数:path => 文件的路径</p>
    <p v-if="globalLanguage ? zw04 : true">参数:uid => 新所有者的用户ID（UID）；如果没有更改，则为null</p>
    <p v-if="globalLanguage ? zw04 : true">参数:gid => 新所有者的组ID（GID）；如果没有更改，则为null</p>
    <p v-if="globalLanguage ? true : yw04">
      Requires
      <span
        class="heibg"
        :style="{ background: globalColor.$codeProminentBgColor.value }"
        >allow-write</span
      >
      permission.
    </p>
    <p v-if="globalLanguage ? true : yw04">Throws Error (not implemented) if executed on Windows</p>
    <p v-if="globalLanguage ? true : yw04">param:path => path to the file</p>
    <p v-if="globalLanguage ? true : yw04">param:uid => uid user id (UID) of the new owner, or null for no change</p>
    <p v-if="globalLanguage ? true : yw04">param:gid => gid group id (GID) of the new owner, or null for no change</p>
  </div>
</template>

<script>
export default {
  name: "Deno_chownSync",
  data() {
    return {
      zw01: false,
      yw01: false,
      zw02: false,
      yw02: false,
      zw03: false,
      yw03: false,
      zw04: false,
      yw04: false,
    };
  },
  computed: {
    globalColor: function () {
      return this.$store.state.globalColor;
    },
    globalLanguage: function () {
      return this.$store.state.globalLanguage;
    },
  },
  methods: {
    func_selectItem: function (name, index) {
      if (index !== this.$store.state.selectItem.index) {
        this.$store.commit("set_selectItem", { name, index });
      }
    },
    func_enterStyleZW: function (e) {
      if (this.globalLanguage !== 0) {
        e.target.style.color = this.globalColor.$buttonChineseFontColorHover.value;
      }
    },
    func_leaveStyleZW: function (b, e) {
      if (this.globalLanguage === 0) {
        e.target.style.color = this.globalColor.$buttonChineseFontColorActive.value;
      } else {
        if (b) {
          e.target.style.color = this.globalColor.$buttonChineseFontColorActive.value;
        } else {
          e.target.style.color = this.globalColor.$buttonChineseFontColor.value;
        }
      }
    },
    func_enterStyleYW: function (e) {
      if (this.globalLanguage !== 1) {
        e.target.style.color = this.globalColor.$buttonEnglishFontColorHover.value;
      }
    },
    func_leaveStyleYW: function (b, e) {
      if (this.globalLanguage === 1) {
        e.target.style.color = this.globalColor.$buttonEnglishFontColorActive.value;
      } else {
        if (b) {
          e.target.style.color = this.globalColor.$buttonEnglishFontColorActive.value;
        } else {
          e.target.style.color = this.globalColor.$buttonEnglishFontColor.value;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>