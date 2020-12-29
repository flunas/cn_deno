<template>
  <div class="base scrollbar">
    <!--  函数名区  -->
    <div class="box">
      <p class="bt" :style="{ color: globalColor.$codeTitleFontColor.value }">
        <b
          ><span
            class="key_function"
            :style="{ color: globalColor.$keyWordFontColorFunction.value }"
            >function</span
          >
          Deno<span class="codeApi" :style="{ color: globalColor.$codeTitleApiFontColor.value }">.copy</span>(src: Reader, dst: Writer, options?: { bufSize: number }): Promise&lt;number&gt;
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
        从src复制到dst，直到从src读取EOF（空）或发生错误。 <br />它解析为复制的字节数，或者拒绝复制时遇到的第一个错误。
      </p>
      <p v-if="globalLanguage ? true : yw01">
        Copies from src to dst until either EOF (null) is read from src or an error occurs. <br />It resolves to the number of bytes copied or rejects with the first error encountered while copying.
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
      <p v-if="globalLanguage ? zw02 : true">src: Reader</p>
      <p v-if="globalLanguage ? zw02 : true">dst : Writer</p>
      <p v-if="globalLanguage ? zw02 : true">options? : { bufSize: number }</p>
      <p v-if="globalLanguage ? true : yw02">src : Reader</p>
      <p v-if="globalLanguage ? true : yw02">dst : Writer</p>
      <p v-if="globalLanguage ? true : yw02">options? : { bufSize: number }</p>
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
      <p v-if="globalLanguage ? zw03 : true">Promise&lt;number&gt;</p>
      <p v-if="globalLanguage ? true : yw03">Promise&lt;number&gt;</p>
    </div>

    <!--  代码块区  -->
    <div class="box codeBox" :style="{
        background: globalColor.$codeBoxBgColor.value,
        color: globalColor.$codeFontBaseColor.value,
      }"
    >
      <p class="code">
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">const</span>
        source = 
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">await</span>
        Deno.open( 
        <span class="code_green" :style="{color: globalColor.$codeFontStringColor.value }">"my_file.txt"</span>
        );
      </p>
      <p class="code">
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">const</span>
        buffer = 
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">new</span>
        Deno.Buffer();
      </p>
      <p class="code">
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">const</span>
        bytesCopied1 = 
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">await</span>
        Deno.copy(source, Deno.stdout);
      </p>
      <p class="code">
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">const</span>
        bytesCopied2 = 
        <span class="key_await" :style="{ color: globalColor.$keyWordFontColorAwait.value }">await</span>
        Deno.copy(source, buffer);
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
      <b>参数</b> src ：复制源。
    </p>
    <p v-if="globalLanguage ? zw04 : true">
      <b>参数</b> dst ：复制到的目的地。
    </p>
    <p v-if="globalLanguage ? zw04 : true">
      <b>参数</b> options ：可用于调整缓冲区的大小。 默认大小为32kB。
    </p>
    <p v-if="globalLanguage ? true : yw04">
      <b>param</b> src : The source to copy from.
    </p>
    <p v-if="globalLanguage ? true : yw04">
      <b>param</b> dst : The destination to copy to.
    </p>
    <p v-if="globalLanguage ? true : yw04">
      <b>param</b> options : Can be used to tune size of the buffer. Default size is 32kB.
    </p>
  </div>
</template>

<script>
export default {
  name: "Deno_copy",
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