<template>
  <div class="base scrollbar" :style="{webkitScrollbar: 'red'}">

<!--  函数名区  -->
      <div class="box">
        <p class="bt" :style="{color: globalColor.$codeTitleFontColor.value}">
          <b>
            <span class="key_function" :style="{color: globalColor.$keyWordFontColorFunction.value,}">function</span> 
            Deno<span class="codeApi" :style="{color: globalColor.$codeTitleApiFontColor.value}">.chdir</span>(directory: string): void
          </b>
        </p>
      </div>

<!--  作用介绍区  -->
    <div class="box">
      <div>
        <h3 :style="{color: globalColor.$keyWordFontColorEffect.value}">作用</h3>
        <button @mouseenter="func_enterStyleZW" @mouseleave="func_leaveStyleZW(zw01,$event)" @click="zw01 = !zw01" :style="{color: globalLanguage ? zw01 ? globalColor.$buttonChineseFontColorActive.value: globalColor.$buttonChineseFontColor.value : globalColor.$buttonChineseFontColorActive.value}">中文</button>|<button @mouseenter="func_enterStyleYW" @mouseleave="func_leaveStyleYW(yw01,$event)" @click="yw01 = !yw01" :style="{color: globalLanguage ? globalColor.$buttonEnglishFontColorActive.value : yw01 ? globalColor.$buttonEnglishFontColorActive.value  : globalColor.$buttonEnglishFontColor.value }">英文</button>
      </div>
      <p v-if="globalLanguage?zw01:true">将当前工作目录更改为指定的路径。</p>
      <p v-if="globalLanguage?true:yw01">Change the current working directory to the specified path.</p>
    </div>

<!--  参数区  -->
    <div class="box">
      <div>
        <h3 :style="{color: globalColor.$keyWordFontColorParam.value}">参数</h3>
        <button @mouseenter="func_enterStyleZW" @mouseleave="func_leaveStyleZW(zw02,$event)" @click="zw02 = !zw02" :style="{color: globalLanguage ? zw02 ? globalColor.$buttonChineseFontColorActive.value: globalColor.$buttonChineseFontColor.value : globalColor.$buttonChineseFontColorActive.value}">中文</button>|<button @mouseenter="func_enterStyleYW" @mouseleave="func_leaveStyleYW(yw02,$event)" @click="yw02 = !yw02" :style="{color: globalLanguage ? globalColor.$buttonEnglishFontColorActive.value : yw02 ? globalColor.$buttonEnglishFontColorActive.value  : globalColor.$buttonEnglishFontColor.value }">英文</button>
      </div>
      <p v-if="globalLanguage?zw02:true" >目录 : 字符串</p>
      <p v-if="globalLanguage?true:yw02">directory : string</p>
    </div>

<!--  返回值区  -->
    <div class="box">
      <div>
        <h3 :style="{color: globalColor.$keyWordFontColorReturnValue.value}">返回值</h3>
        <button @mouseenter="func_enterStyleZW" @mouseleave="func_leaveStyleZW(zw03,$event)" @click="zw03 = !zw03" :style="{color: globalLanguage ? zw03 ? globalColor.$buttonChineseFontColorActive.value: globalColor.$buttonChineseFontColor.value : globalColor.$buttonChineseFontColorActive.value}">中文</button>|<button @mouseenter="func_enterStyleYW" @mouseleave="func_leaveStyleYW(yw03,$event)" @click="yw03 = !yw03" :style="{color: globalLanguage ? globalColor.$buttonEnglishFontColorActive.value : yw03 ? globalColor.$buttonEnglishFontColorActive.value  : globalColor.$buttonEnglishFontColor.value }">英文</button>
      </div>
      <p v-if="globalLanguage?zw03:true">空的.(可以理解为无返回值)</p>
      <p v-if="globalLanguage?true:yw03">void</p>
    </div>

<!--  代码块区  -->
    <div class="box codeBox" :style="{background: globalColor.$codeBoxBgColor.value, color: globalColor.$codeFontBaseColor.value }">
      <p class="code">Deno.chdir(<span class="code_green" :style="{color: globalColor.$codeFontStringColor.value }">"/home/userA"</span>);</p>
      <p class="code">Deno.chdir(<span class="code_green" :style="{color: globalColor.$codeFontStringColor.value }">"../userB"</span>);</p>
      <p class="code">Deno.chdir(<span class="code_green" :style="{color: globalColor.$codeFontStringColor.value }">"C:\\Program Files (x86)\\Java"</span>);</p>
    </div>

<!--  其他介绍区  -->
    <div class="box">
      <h3 :style="{color: globalColor.$keyWordFontColorOther.value}">其它</h3>
      <button @mouseenter="func_enterStyleZW" @mouseleave="func_leaveStyleZW(zw04,$event)" @click="zw04 = !zw04" :style="{color: globalLanguage ? zw04 ? globalColor.$buttonChineseFontColorActive.value: globalColor.$buttonChineseFontColor.value : globalColor.$buttonChineseFontColorActive.value}">中文</button>|<button @mouseenter="func_enterStyleYW" @mouseleave="func_leaveStyleYW(yw04,$event)" @click="yw04 = !yw04" :style="{color: globalLanguage ? globalColor.$buttonEnglishFontColorActive.value : yw04 ? globalColor.$buttonEnglishFontColorActive.value  : globalColor.$buttonEnglishFontColor.value }">英文</button>
    </div>
    <p v-if="globalLanguage?zw04:true">如果找不到目录，则抛出 <span class="heibg" :style="{background: globalColor.$codeProminentBgColor.value }">Deno.errors.NotFound</span>。 <br />如果用户没有访问权限，则抛出 <span class="heibg" :style="{background: globalColor.$codeProminentBgColor.value }">Deno.errors.PermissionDenied</span>。需要 <span class="heibg" :style="{background: globalColor.$codeProminentBgColor.value }">--allow-read</span>。</p>
    <p v-if="globalLanguage?true:yw04">Throws <span class="heibg" :style="{background: globalColor.$codeProminentBgColor.value }">Deno.errors.NotFound</span> if directory not found. <br />Throws <span class="heibg" :style="{background: globalColor.$codeProminentBgColor.value }">Deno.errors.PermissionDenied</span> if the user does not have access rights Requires <span class="heibg" :style="{background: globalColor.$codeProminentBgColor.value }">--allow-read</span>.</p>
  </div>


</template>

<script>
export default {
  name: "Deno_chdir",
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
    }
  },
  computed: {
    globalColor: function () {
      return this.$store.state.globalColor;
    },
    globalLanguage: function () {
      return this.$store.state.globalLanguage;
    }
  },
  methods: {
    func_enterStyleZW: function (e) {
      if(this.globalLanguage !== 0){
        e.target.style.color = this.globalColor.$buttonChineseFontColorHover.value;
      }
    },
    func_leaveStyleZW: function (b,e) {
      if(this.globalLanguage === 0) {
        e.target.style.color = this.globalColor.$buttonChineseFontColorActive.value;
      }else{
        if(b){
          e.target.style.color = this.globalColor.$buttonChineseFontColorActive.value;
        } else{
          e.target.style.color = this.globalColor.$buttonChineseFontColor.value;
        }
      }
    },
    func_enterStyleYW: function (e) {
      if(this.globalLanguage !== 1) {
        e.target.style.color = this.globalColor.$buttonEnglishFontColorHover.value;
      }
    },
    func_leaveStyleYW: function (b,e) {
      if(this.globalLanguage === 1){
        e.target.style.color = this.globalColor.$buttonEnglishFontColorActive.value;
      } else{
        if(b){
          e.target.style.color = this.globalColor.$buttonEnglishFontColorActive.value;
        }else{
          e.target.style.color = this.globalColor.$buttonEnglishFontColor.value;
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">

</style>