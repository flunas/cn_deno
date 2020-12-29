<template>
  <div class="base scrollbar">
    <!--  函数名区  -->
    <div class="box">
      <p class="bt" :style="{ color: globalColor.$codeTitleFontColor.value }">
        <b>
          <span class="key_function" :style="{ color: globalColor.$keyWordFontColorFunction.value }">function</span>
          Deno<span class="codeApi" :style="{ color: globalColor.$codeTitleApiFontColor.value }">.chmod</span>(path: string | URL, mode: number): Promise&lt;void&gt;
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
        更改指定路径的特定文件/目录的权限。 忽略进程的umask值。
      </p>
      <p v-if="globalLanguage ? true : yw01">
        Changes the permission of a specific file/directory of specified path.
        Ignores the process's umask.
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
      <p v-if="globalLanguage ? true : yw02">path : string | URL</p>
      <p v-if="globalLanguage ? zw02 : true">模式 : 数字</p>
      <p v-if="globalLanguage ? true : yw02">mode : number</p>
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
      <p v-if="globalLanguage ? zw03 : true">Promise&lt;void&gt;</p>
      <p v-if="globalLanguage ? true : yw03">Promise&lt;void&gt;</p>
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
          >await</span
        >
        Deno.chmod(<span class="code_green">"/path/to/file"</span>,
        <span
          class="codeArg01"
          :style="{ color: globalColor.$codeFontColorParam.value }"
          >0o666</span
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
      该模式是3个八进制数字的序列。 <br />第一个(最左边的)数字指定所有者的权限。
      <br />第二个数字指定该组的权限。
      <br />最后(最右边)的数字指定其他用户的权限。
      <br />例如，在0o764模式下，所有者（7）可以读/写/执行，组（6）可以读/写，其他所有人（4）只能读。
    </p>
    <p v-if="globalLanguage ? true : yw04">
      The mode is a sequence of 3 octal numbers. <br />The first/left-most
      number specifies the permissions for the owner. <br />The second number
      specifies the permissions for the group. <br />The last/right-most number
      specifies the permissions for others. For example, with a mode of 0o764,
      the owner (7) can read/write/execute, the group (6) can read/write and
      everyone else (4) can read only.
    </p>
    <table
      :style="{ borderColor: globalColor.$tableBorderColor.value }"
      v-if="globalLanguage ? zw04 : true"
      cellspacing="0"
      rules="all"
      cellpadding="5"
    >
      <caption>
        权限表
      </caption>
      <tr>
        <td>数字</td>
        <td>描述</td>
      </tr>
      <tr>
        <td style="text-align: center">7</td>
        <td>读,写,执行</td>
      </tr>
      <tr>
        <td style="text-align: center">6</td>
        <td>读和写</td>
      </tr>
      <tr>
        <td style="text-align: center">5</td>
        <td>读和执行</td>
      </tr>
      <tr>
        <td style="text-align: center">4</td>
        <td>只读</td>
      </tr>
      <tr>
        <td style="text-align: center">3</td>
        <td>写和执行</td>
      </tr>
      <tr>
        <td style="text-align: center">2</td>
        <td>只写</td>
      </tr>
      <tr>
        <td style="text-align: center">1</td>
        <td>仅执行</td>
      </tr>
      <tr>
        <td style="text-align: center">0</td>
        <td>没有许可(没有权限)</td>
      </tr>
    </table>
    <table
      :style="{ borderColor: globalColor.$tableBorderColor.value }"
      v-if="globalLanguage ? true : yw04"
      cellspacing="0"
      rules="all"
      cellpadding="5"
    >
      <caption>
        Permission table
      </caption>
      <tr>
        <td>Number</td>
        <td>Description</td>
      </tr>
      <tr>
        <td style="text-align: center">7</td>
        <td>read, write, and execute</td>
      </tr>
      <tr>
        <td style="text-align: center">6</td>
        <td>read and write</td>
      </tr>
      <tr>
        <td style="text-align: center">5</td>
        <td>read and execute</td>
      </tr>
      <tr>
        <td style="text-align: center">4</td>
        <td>read only</td>
      </tr>
      <tr>
        <td style="text-align: center">3</td>
        <td>write and execute</td>
      </tr>
      <tr>
        <td style="text-align: center">2</td>
        <td>write only</td>
      </tr>
      <tr>
        <td style="text-align: center">1</td>
        <td>execute only</td>
      </tr>
      <tr>
        <td style="text-align: center">0</td>
        <td>no permission</td>
      </tr>
    </table>
    <p v-if="globalLanguage ? zw04 : true">注意：此API当前在Windows上抛出</p>
    <p v-if="globalLanguage ? zw04 : true">
      需要
      <span
        class="heibg"
        :style="{ background: globalColor.$codeProminentBgColor.value }"
        >allow-write</span
      >
      权限。
    </p>
    <p v-if="globalLanguage ? true : yw04">
      NOTE: This API currently throws on Windows
    </p>
    <p v-if="globalLanguage ? true : yw04">
      Requires
      <span
        class="heibg"
        :style="{ background: globalColor.$codeProminentBgColor.value }"
        >allow-write</span
      >
      permission.
    </p>
  </div>
</template>

<script>
export default {
  name: "Deno_chmod",
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