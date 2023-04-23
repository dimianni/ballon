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

export const getRecentPosts = async (apiEndpoint) => {
    const query = gql`
        query Post {
            posts(last: 3, orderBy: createdAt_DESC) {
                createdAt
                id
                slug
                title
            }
        }
    `;
    const response = await request(apiEndpoint, query)

    return response.posts
}

