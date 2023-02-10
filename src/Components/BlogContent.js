import Blog from "./Blog"

function BlogContent(){
    const blogs=[
        {id:1,title:"React", content:"I am learning Reactjs"},
        {id:2, title:"Angular", content:"I am learning Angularjs here"}
    ]
    return(
        <div>
            <Blog posts={blogs} />
        </div>
    )
}

export default BlogContent;