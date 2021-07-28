import { App } from '@/App';
import router from '@/router';
import '@/assets/scss/index.scss';

const $app = document.querySelector('#app');
new App($app).use(router);
