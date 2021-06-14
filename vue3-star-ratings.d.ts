import { DefineComponent, Plugin } from 'vue';

declare const Vue3StarRatings: DefineComponent<{}, {}, any> & { install: Exclude<Plugin['install'], undefined> };
export default Vue3StarRatings;
