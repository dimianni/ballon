import { request, gql } from 'graphql-request';

export default async function getcomments(req, res) {

    let data = req.body;

    const query = gql`
        query getComments($slug: String!) {
            comments(where: {post: {slug: $slug}}) {
                createdAt
                name
                message
                id
            }
        }
    `;

    try {
        const response = await request(process.env.GRAPHCMS_ENDPOINT, query, { slug: data.slug })
        return res.status(200).json({ data: response.comments })
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })
    }


}