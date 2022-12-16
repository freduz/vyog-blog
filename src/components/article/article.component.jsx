import { Outlet } from "react-router-dom"

const Article = () => {
    return (
        <div>
            <h2>Article main page</h2>
            <Outlet/>
        </div>
    )
}

export default Article