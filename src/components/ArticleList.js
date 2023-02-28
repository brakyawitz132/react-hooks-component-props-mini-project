import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articleArray = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    console.log(posts)
    return (
        <div className="article-list">
            <main>
                {articleArray}
            </main>
        </div>
    )
}

export default ArticleList;