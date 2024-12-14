import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const Post = () => {

    const [item, setItem] = useState();

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

    const id = useParams().id;

    useEffect(() => {
        console.log(parseInt(id))
        console.log(posts.filter((item) => item.id === parseInt(id)))
        setItem(posts.filter((item) => item.id === parseInt(id))[0])
    }, [])

    console.log(useParams().id)
    return (
        <div>
            <NavBar />
            <p>{item && item.title}</p>
        </div>
    )
}

export default Post;