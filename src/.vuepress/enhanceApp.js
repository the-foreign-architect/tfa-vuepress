require('typeface-merriweather');
require('typeface-poppins');
require('typeface-source-sans-pro');
import './theme/styles/main.css';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import SocialSharing from 'vue-social-sharing';

export default ({ Vue }) => {
  Vue.use(VuePlyr);
  Vue.use(SocialSharing);
};
