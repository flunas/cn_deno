import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: {
      globalColor: {
        open: false
      }
    },
    dOrN: 0,    // 白天或夜晚  0:白天  1:夜晚
    globalColor: {
      $htmlBg: {
        title: 'HTML 背景',
        value: 'rgba(255,255,255,1)',
        preDefine: [
            'rgba(255,255,255,1)',
            'rgba(0,0,0,1)'
        ]
      },
      $baseFontColor: {
        title: '基础文本',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $menuListFontColor: {
        title: '导航列表文本',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(255, 255, 255, 1)'
        ]
      },
      $menuListFontColorActive: {
        title: '导航列表文本-激活',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $menuListFontColorHover: {
        title: '导航列表文本-hover',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $menuListBorderColor: {
        title: '导航列表边框',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $keyWordFontColorFunction: {
        title: '关键字-function',
        value: 'rgba(139,0,0,1)',
        preDefine: [
          'rgba(139,0,0,1)',
          'rgba(227, 18, 18, 1)'
        ]
      },
      $codeTitleFontColor: {
        title: '代码标题文本',
        value: 'rgba(102,102,102,1)',
        preDefine: [
          'rgba(102,102,102,1)',
          'rgba(194, 194, 194, 1)'
        ]
      },
      $codeTitleApiFontColor: {
        title: '代码标题文本-API',
        value: 'rgba(0,0,0,1)',
        preDefine: [
          'rgba(0,0,0,1)',
          'rgba(255, 255, 255, 1)'
        ]
      },
      $keyWordFontColorEffect: {
        title: '关键字-作用',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $keyWordFontColorParam: {
        title: '关键字-参数',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $keyWordFontColorReturnValue: {
        title: '关键字-返回值',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $keyWordFontColorOther: {
        title: '关键字-其它',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $buttonChineseFontColor: {
        title: '按钮文本-中文',
        value: 'rgba(0,0,0,1)',
        preDefine: [
          'rgba(0,0,0,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $buttonChineseFontColorActive: {
        title: '按钮文本-中文-激活',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $buttonChineseFontColorHover: {
        title: '按钮-文本-中文-hover',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $buttonEnglishFontColor: {
        title: '按钮文本-英文',
        value: 'rgba(0,0,0,1)',
        preDefine: [
          'rgba(0,0,0,1)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $buttonEnglishFontColorActive: {
        title: '按钮文本-英文-激活',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $buttonEnglishFontColorHover: {
        title: '按钮文本-英文-hover',
        value: 'rgba(255,69,0,1)',
        preDefine: [
          'rgba(255,69,0,1)',
          'rgba(108, 255, 245, 1)'
        ]
      },
      $codeBoxBgColor: {
        title: '代码块背景',
        value: 'rgba(44,62,80,1)',
        preDefine: [
          'rgba(44,62,80,1)',
          'rgba(70, 148, 228, 0.46)'
        ]
      },
      $codeFontBaseColor: {
        title: '代码文本基本',
        value: 'rgba(245,245,245,1)',
        preDefine: [
          'rgb(245,245,245)',
          'rgba(234, 234, 234, 1)'
        ]
      },
      $keyWordFontColorAwait: {
        title: '关键字-await',
        value: 'rgba(198,120,221,1)',
        preDefine: [
          'rgba(198,120,221,1)',
          'rgba(230, 144, 255, 1)'
        ]
      },
      $codeFontStringColor: {
        title: '代码文本-字符串',
        value: 'rgba(144,238,144,1)',
        preDefine: [
          'rgba(144,238,144,1)',
          'rgba(91, 235, 91, 1)'
        ]
      },
      $codeFontColorParam: {
        title: '代码文本-参数',
        value: 'rgba(209,154,102,1)',
        preDefine: [
          'rgba(209,154,102,1)',
          'rgba(248, 180, 115, 1)'
        ]
      },
      $codeProminentBgColor: {
        title: '代码突出显示背景',
        value: 'rgba(240,248,255,1)',
        preDefine: [
          'rgba(240,248,255,1)',
          'rgba(228, 237, 245, 0.31)'
        ]
      },
      $tableBorderColor: {
        title: '表格边框',
        value: 'rgba(210,214,220,1)',
        preDefine: [
          'rgba(210,214,220,1)',
          'rgba(210, 214, 220, 1)'
        ]
      },
      $codeComment: {
        title: '代码注释',
        value: 'rgba(92,99,112,1)',
        preDefine: [
          'rgba(92,99,112,1)',
          'rgba(132, 137, 143, 1)'
        ]
      },
      $codeConsole: {
        title: '代码 - console',
        value: 'rgba(230,192,123,1)',
        preDefine: [
          'rgba(230,192,123,1)',
          'rgba(230,192,123,1)'
        ]
      }
    },
    globalLanguage: 0,  //全局语言--0:中文,1:英文
    reload: false,       //设置全局语言时是否重载--true:重载,false:不重载
    selectItem: {
      name: 'Jdsm',
      index: 0
    },
    menuList: [
      {
        name: 'Jdsm',
        title: '简单说明',
        module: undefined
      },
      {
        name: 'Deno_chdir',
        title: 'Deno.chdir',
        module: undefined
      },
      {
        name: 'Deno_chmod',
        title: 'Deno.chmod',
        module: undefined
      },
      {
        name: 'Deno_chmodSync',
        title: 'Deno.chmodSync',
        module: undefined
      },
      {
        name: 'Deno_chown',
        title: 'Deno.chown',
        module: undefined
      },
      {
        name: 'Deno_chownSync',
        title: 'Deno.chownSync',
        module: undefined
      },
      {
        name: 'Deno_close',
        title: 'Deno.close',
        module: undefined
      },
      {
        name: 'Deno_connect',
        title: 'Deno.connect',
        module: undefined
      },
      {
        name: 'Deno_connectTls',
        title: 'Deno.connectTls',
        module: undefined
      },
      {
        name: 'Deno_copy',
        title: 'Deno.copy',
        module: undefined
      },
      {
        name: 'Deno_copyFile',
        title: 'Deno.copyFile',
        module: undefined
      },
      {
        name: 'Deno_copyFileSync',
        title: 'Deno.copyFileSync',
        module: undefined
      },
      {
        name: 'Deno_create',
        title: 'Deno.create',
        module: undefined
      },
      {
        name: 'Deno_createSync',
        title: 'Deno.createSync',
        module: undefined
      },
      {
        name: 'Deno_cwd',
        title: 'Deno.cwd',
        module: undefined
      },
      {
        name: 'Deno_execPath',
        title: 'Deno.execPath',
        module: undefined
      },
      {
        name: 'Deno_exit',
        title: 'Deno.exit',
        module: undefined
      },
      {
        name: 'Deno_fdatasync',
        title: 'Deno.fdatasync',
        module: undefined
      },
      {
        name: 'Deno_fdatasyncSync',
        title: 'Deno.fdatasyncSync',
        module: undefined
      },
    ]
  },
  mutations: {
    // 设置全局白天或夜晚
    setDOrN: (state, payload) => {
      for(let i = 0, arr = Object.keys(state.globalColor), j = arr.length; i < j; i++) {
        state.globalColor[arr[i]].value = state.globalColor[arr[i]].preDefine[payload] ? state.globalColor[arr[i]].preDefine[payload] : state.globalColor[arr[i]].preDefine[0];
      }
      state.dOrN = payload;
    },
    //设置全局颜色
    setGlobalColor: (state, payload) => {
      state.globalColor[payload.name].value = payload.value;
    },
    // 设置抽屉-全局颜色
    setGlobalColorDrawer: (state, payload) => {
      state.drawer.globalColor.open = payload
    },
    //设置选择的目录
    set_selectItem: (state,payload) => {
      state.selectItem.name = payload.name;
      state.selectItem.index = payload.index;
    //  读取对应 module 数据
      state.menuList[payload.index].module = () => import('@/views/' + payload.name);
    },
  //  设置全局语言
    setGlobalLanguage: (state,payload) => {
      state.globalLanguage = payload;
      localStorage.setItem('gl',payload);
    },
  //  设置更新语言时是否重载
    setReload: (state, payload) => {
      state.reload = payload;
      localStorage.setItem('glrl',payload);
    },
  },
  actions: {
  },
  modules: {
  }
})
