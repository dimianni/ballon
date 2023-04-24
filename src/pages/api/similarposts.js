import { getSimilarPosts } from "../../services/index";


export default async function getMostSimilarPosts(req, res) {

    const data = req.body;

    try {
        const result = await getSimilarPosts(process.env.GRAPHCMS_ENDPOINT, data.slug, data.categories)
        return res.status(200).json({ data: result })
    } catch (error) {
        return res.status(400).json({ errorMessage: error.message })
    }
}