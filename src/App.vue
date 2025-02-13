<template lang="pug">
  #app
    rs-panes(
      split-to="columns"
      :allow-resize="true"
      :max-size="500"
      :min-size="150"
      :size="150"
      resizerColor="#121820"
      :resizerBorderThickness="1"
      )
      Sidebar(class="sidebar" slot="firstPane")
      Main(class="main" slot="secondPane")
    TableModals
    RecordModals
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import Main from './containers/Main.vue';
import Sidebar from './containers/Sidebar.vue';
import TableModals from './containers/TableModals.vue';
import RecordModals from './containers/RecordModals.vue';

@Component({
  name: 'app',
  components: {
    Main,
    Sidebar,
    TableModals,
    RecordModals,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@import url('https://fonts.font.im/css?family=Roboto')

*
  padding 0
  margin 0
  box-sizing border-box

*::-webkit-scrollbar
  width 5px
  background transparent
  height 8px
  z-index 1000

*::-webkit-scrollbar-thumb
  background #484d54
  border-radius 2px

*::-webkit-scrollbar-corner
  height 0
  background transparent

html, body
  height 100%
  width 100%
  font-size 14px
  overflow hidden

::placeholder
  opacity .5

[class^="el-"],.el-col,.el-row
  font-family 'Roboto', sans-serif

#app
  display flex
  width 100%
  height 100%

// customizing some imported components and theme selectors
input[type='text']:disabled
  color #aaa !important

.Resizer
  z-index 1 !important

.el-dialog__body
  z-index 10000 !important

.el-checkbox__inner
  border 1px solid #307CB0 !important

.el-popover
  border 1px solid #aaa !important

.popper__arrow
  display none !important

.el-input__inner
  background-color #2c323a !important

.el-tag
  background #121820 !important
  color #fff !important

.el-tag__close
  color #fff !important
  background none !important

.cell
  text-overflow ellipsis
  white-space nowrap !important

.el-tabs__header
  background none !important

.el-color-picker__trigger
  border none !important

.el-color-picker__color
  border 1px solid #121820 !important

// table row height
.el-table .cell
  line-height 20px !important

.el-table, .el-list
  user-select none !important

td
  cursor pointer

.el-input__inner, .el-input
  border-radius 0 !important

.jsoneditor
  border none !important
  height 100% !important

.jsoneditor-field
  color #fff !important

// jsoneditor KEY field hover background
.jsoneditor-field:hover, .jsoneditor-field:focus
  color #fff !important
  background #191d25 !important
  border 1px solid #191d25 !important

.jsoneditor-string
  color #46b7ff !important

.jsoneditor-menu
  background none !important
  border none !important

.jsoneditor-contextmenu .jsoneditor-menu
  background #fff !important

.jsoneditor-contextmenu:active
  background none !important

.jsoneditor-selected
  background none !important

.jsoneditor-tree button
  color #000 !important

// jsoneditor VALUE field hover background
.jsoneditor-value:hover, .jsoneditor-value:focus
  color #fff !important
  background #191d25 !important
  border 1px solid #191d25 !important

.jsoneditor-tree button:focus
  background none !important
  outline none !important

.jsoneditor-highlight
  background none !important

.jsoneditor-search input
  background #2c323a !important
  color #fff !important

.jsoneditor-tree input[type='checkbox']
  display none !important

.jsoneditor-search div.jsoneditor-frame
  background #2c323a !important
  color #fff !important
  border-radius 2px !important
  border 1px solid #121820 !important

.el-table__fixed::before, .el-table__fixed-right::before
  background-color rgba(0, 0, 0, 0) !important

.jsoneditor-next
  display none !important

.jsoneditor-previous
  display none !important

.jsoneditor-contextmenu .jsoneditor-menu
  background-color #222933 !important
  border 1px solid #191d25 !important
  box-shadow none !important

div.jsoneditor-contextmenu ul li button
  color #fff !important

div.jsoneditor-contextmenu ul li button:hover
  background-color #191d25 !important

.ace-jsoneditor .ace_scroller
  background-color #2c323a !important
  border 1px solid #191d25 !important

.jsoneditor-poweredBy
  display none !important

.ace_gutter
  background #2c323f !important
  border 1px solid #191d25 !important

.ace-jsoneditor .ace_marker-layer .ace_active-line
  background #2f3f3f !important

.ace-jsoneditor .ace_text-layer
  color #fff !important

.ace_variable
  color #FF007F !important

.ace_string
  color #52E3F6 !important

.ace-jsoneditor .ace_indent-guide
  background none !important

.ace-jsoneditor.ace_editor
  height 50vh !important

@media screen and (max-height: 600px)
  .table
    height 65vh !important

@media screen and (max-height: 900)
  .table
    height 80vh !important
</style>
