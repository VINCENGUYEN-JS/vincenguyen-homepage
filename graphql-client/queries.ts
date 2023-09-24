import { gql } from "@apollo/client";

export const BLOG_QUERY = gql`
  {
    publication(host: "vincenguyen.hashnode.dev") {
      title
      posts(first: 10) {
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
`;
