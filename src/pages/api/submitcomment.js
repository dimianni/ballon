import { GraphQLClient, gql } from "graphql-request"

export default async function sumbitcomment(req, res){
    
    let data = req.body

    const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    })

    const query = gql`
        mutation CreateComment($name: String!, $message: String!, $slug: String!){
            createComment(data: {name: $name, message: $message, post: {connect: {slug: $slug}}}) {id}
        }
    `;

    const response = await graphQLClient.request(query, {
        name: data.name,
        message: data.message,
        slug: data.slug
    })

    return res.status(200).json({data: response})
}