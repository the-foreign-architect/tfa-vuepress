require('typeface-merriweather');
require('typeface-poppins');
require('typeface-source-sans-pro');
import SocialSharing from 'vue-social-sharing';
import { library } from '@fortawesome/fontawesome-svg-core';
//import {  } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitterSquare,
  faPinterestSquare,
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
  faLinkedin,
  faReddit,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faTwitterSquare,
  faPinterestSquare,
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
  faLinkedin,
  faReddit,
  faWhatsapp,
);

export default ({ Vue }) => {
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.use(SocialSharing);
};
