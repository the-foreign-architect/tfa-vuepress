require('typeface-merriweather');
require('typeface-poppins');
require('typeface-source-sans-pro');
import VuePlyr from 'vue-plyr';
import SocialSharing from 'vue-social-sharing';

export default ({ Vue }) => {
  Vue.use(VuePlyr);
  Vue.use(SocialSharing);
};
