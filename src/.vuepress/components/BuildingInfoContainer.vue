<template>
  <div>
    <building-info :building="building"/>
    <back-to-top anchor="#buildings"/>
  </div>
</template>
<script>
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
    const { gql } = require('graphql-tag');
    const { ApolloClient } = require('apollo-client');
    const { HttpLink } = require('apollo-link-http');
    const { InMemoryCache } = require('apollo-cache-inmemory');
    const apolloClient = new ApolloClient({
      link: new HttpLink({ uri: process.env.GRAPHQL_URL }),
      cache: new InMemoryCache(),
    });
    const { buildingById } = require('../graphql/BuildingInfo');
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