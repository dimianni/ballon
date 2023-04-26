import { getFeaturedPosts } from "@/services"

export default async function allFeaturedPosts(req, res) {

    try {
        const result = await getFeaturedPosts(process.env.GRAPHCMS_ENDPOINT)
        return res.status(200).json({ data: result })
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })
    }

}