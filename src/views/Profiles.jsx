import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Profiles = () => {

    const posts = [
        {
            id: 1,
            title: "Post 1"
        },
        {
            id: 2,
            title: "Post 2"
        },
        {
            id: 3,
            title: "Post 3"
        },
        {
            id: 4,
            title: "Post 4"
        },
    ]
    return (
        <>
            <NavBar />
            <h1>Posts</h1>
            {posts.map((item) => <Link key={item.id} to={`/posts/${item.id}`}>{item.title}</Link>)}
        </>
    )
}

export default Profiles;