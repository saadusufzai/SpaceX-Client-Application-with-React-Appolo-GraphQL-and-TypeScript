import  gql from 'graphql-tag'

export const QUERY_ROCKET_LIST  = gql`
  query {
    rockets {
      name
      id
      height {
        meters
      }
      description
      cost_per_launch
      wikipedia
    }
  }
`