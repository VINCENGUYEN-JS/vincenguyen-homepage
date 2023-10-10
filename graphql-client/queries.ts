import { gql } from "@apollo/client";

export const BLOG_QUERY = gql`
  query BlogQuery($slug: String!) {
    publication(host: "vincenguyen.hashnode.dev") {
      series(slug: $slug) {
        posts(first: 20) {
          edges {
            node {
              title
              brief
              views
              url
              reactionCount
              subtitle
              tags {
                name
              }
              coverImage {
                url
              }
              seo {
                title
                description
              }
              readTimeInMinutes
            }
          }
        }
      }
    }
  }
`;
