import ArticleItem from '../../components/article-item/article-item.component'

import './article.component.style.scss'

const Article = () => {
    return (
        <div className="article">
            <div className="article-header">
                <h2>Popular Articles</h2>
                <p>You can read more intresting articles about the fashion</p>
            </div>
            <div className="article-container">
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
        <ArticleItem/>
       </div>
        </div>
       
    )
}

export default Article;