import gql from 'graphql-tag';
export const buildingById = gql`
  query buildingById($id: Int!) {
    buildingById(id: $id) {
      name
      website
      year
      address
      gfa
      gmapsEmbed
      gmapsLink
      height
      lat
      lng
      typology
      architectBuildings {
        totalCount
        nodes {
          architect {
            id
            name
            website
          }
        }
      }
      city {
        country {
          id
          iso
          name
        }
        id
        name
      }
      links {
        totalCount
        nodes {
          id
          title
          url
          source {
            id
            name
            website
          }
        }
      }
    }
  }
`;
