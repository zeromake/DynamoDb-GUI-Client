import Vue from 'vue';

declare module '*.vue' {
  export default Vue;
}

declare module 'vue' {
  export default interface Vue {
    $confirm: any;
    $notify: any;
  }
}
