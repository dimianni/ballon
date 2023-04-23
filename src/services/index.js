import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query Assets {
            postsConnection {
                edges {
                cursor
                node {
                    authors {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                    url
                    }
                    categories {
                    name
                    slug
                    }
                }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query)

    return result.postsConnection.edges;
}