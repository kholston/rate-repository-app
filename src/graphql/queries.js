import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query{
  repositories {
    edges {
      node {
        id
        fullName
        ratingAverage
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
        reviewCount
      }
    }
  } 
}
`;