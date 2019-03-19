import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import '../theme/styles/main.css';

import BuildingInfo from '../components/BuildingInfo.vue';

const buildingComplete = require('./buildingComplete.json');

storiesOf('BuildingInfo', module).add('complete', () => ({
  components: { BuildingInfo },
  data: () => ({
    building: buildingComplete,
  }),
  template: '<building-info :building="building"/>',
}));
