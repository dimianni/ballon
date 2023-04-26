import moment from "moment";

export default function Time({date}){
    return (
        <time>
            <span className="text-xs font-light">{moment(date).format('MMM DD, YYYY')}</span>
        </time>
    )
}