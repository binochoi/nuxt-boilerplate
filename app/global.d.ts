import { Icon } from '@iconify/vue';
import 'vue-router';

declare module 'vue' {
  export interface GlobalComponents {
    Icon: Icon,
  }
}
