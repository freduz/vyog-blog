import {Routes,Route} from 'react-router-dom'

import Home from './../../pages/home/home.component'
import  Article from '../article/article.component'
import AddArticle from '../article/add-article/add-article.component'

const Layout = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='article' element={<Article/>} >
                <Route path=':id'/>
                <Route path='add' element={<AddArticle/>}/>
            </Route>
        
        </Routes>
    )
}

export default Layout