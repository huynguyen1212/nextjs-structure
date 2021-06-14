import {gql} from '@apollo/client'

export const DemoQuery = gql`
  query Demos {
    id
    name
  }
`