import { submitComment } from "@/services"
import { useState } from "react"
import { Button } from "@/UI"

const initValues = {
    name: "",
    message: ""
}

function CommentsForm({ slug }) {

    const [formContent, setFormContent] = useState(initValues)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleFormChange = (e) => {
        setFormContent(prevContent => {
            return {
                ...prevContent,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleFormSend = async (e) => {
        e.preventDefault();

        if (formContent.name == "" || formContent.message == ""){
            setError(true)
            return;
        }

        const commentObj = {
            ...formContent,
            slug: slug
        }

        submitComment(commentObj)
            .then(res => {
                setError(false)
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
                setFormContent(initValues)
            })
    }

    return (
        <div className="commentForm rounded bg-grey-500 overflow-hidden p-4">
            <h3 className="text-2xl font-semibold mb-3">Leave a comment</h3>
            <form className="">
                <div className="name flex flex-col mb-2">
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleFormChange} value={formContent.name} className="bg-grey-900 py-2 px-3" placeholder="Your name" id="name" name="name" type="text" />
                </div>
                <div className="message flex flex-col mb-2">
                    <label htmlFor="message">Message:</label>
                    <textarea onChange={handleFormChange} value={formContent.message} className="bg-grey-900 py-2 px-3" placeholder="Join the discussion..." name="message" id="message" rows="5"></textarea>
                </div>
                <div className="submit flex items-center justify-between">
                    <Button size="md" color="pink" onClick={handleFormSend}>
                        <p>Comment</p> 
                    </Button>
                    {error && <p className="text-red-600">All fields are mandatory!</p>}
                    {success && <p className="text-green-600">Comment submitted for review!</p>}
                </div>
            </form>
        </div>
    )
}

export default CommentsForm