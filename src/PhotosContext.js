import React from "react"
const PhotosContext = React.createContext()

function PhotosContextProvider (props) {
    const [allPhotos, setAllPhotos] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    React.useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setAllPhotos(data)
            })
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    } 

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem]);
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <PhotosContext.Provider 
            value={{
                allPhotos,
                toggleFavorite,
                cartItems,
                addToCart,
                removeFromCart
            }}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContextProvider, PhotosContext}
