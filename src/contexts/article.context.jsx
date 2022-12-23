const { createContext, useState } = require("react");

export const ArticleContext = createContext({
    products:[],
    setProducts:() => null
})

export const ArticleProvider = ({children}) => {
    const [products,setProducts] = useState(null);
    const value = {products,setProducts}

    return (
        <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
    )
   
}