import { Time } from "@/UI";
import { getComments } from "@/services"
import { useEffect, useState } from "react"


function Comments({ slug }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(slug)
            .then(res => {
                setComments(res.data)
            })
    }, [])

    return (
        <div className="rounded bg-grey-500 overflow-hidden p-4">
            <h3 className="text-lg font-semibold mb-3 opacity-70">{comments?.length} {comments?.length === 1 ? "Comment" : "Comments"}</h3>

            {comments?.length > 0 &&
                <div>
                    <ul>
                        {
                            comments.map(comment => {
                                return (
                                    <li key={comment.id} className="my-3">
                                        <div className="name">
                                            <p>{comment.name}</p>
                                        </div>
                                        <div className="time mb-2 opacity-70">
                                            <Time date={comment.createdAt} />
                                        </div>
                                        <div className="comment">
                                            <p>
                                                {comment.message}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Comments