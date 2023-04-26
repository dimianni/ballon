import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
        query Assets {
            postsConnection(orderBy: publishedAt_DESC) {
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

    try {
        const response = await request(apiEndpoint, query)
        return response.posts
    } catch (error) {
        console.log(error.message);
        return error
    }

}

export const getSimilarPosts = async (apiEndpoint, slug, categories) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `;

    try {
        const response = await request(apiEndpoint, query, { slug, categories })
        return response.posts
    } catch (error) {
        console.log(error.message);
        return error
    }
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug : String!) {
            post(where: {slug: $slug}) {
                title
                slug
                authors {
                    name
                    id
                    photo {
                        url
                    }
                }
                publishedAt
                content {
                    html
                }
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                }
            }
        }
    `;

    const response = await request(graphqlAPI, query, { slug })

    return response.post
}