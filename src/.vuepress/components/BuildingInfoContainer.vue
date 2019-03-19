<template>
  <div>
    <building-info :building="building"/>
    <back-to-top anchor="#buildings"/>
  </div>
</template>
<script>
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql',
});
import { buildingById } from '../graphql/BuildingInfo';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      building: null,
    };
  },
  beforeMount() {
    apolloClient
      .query({
        query: buildingById,
        variables: {
          id: parseInt(this.id),
        },
      })
      .then(result => {
        this.building = result.data.buildingById;
      })
      .catch(e => {
        console.log('error', e);
      });
  },
};
</script>