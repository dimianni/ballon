import { getRecentPosts } from '../../services/index'

// Note: 'default' is mandatory
export default async function getMostRecentPosts(req, res) {

    try {
        const result = await getRecentPosts(process.env.GRAPHCMS_ENDPOINT)
        return res.status(200).json({ data: result })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}