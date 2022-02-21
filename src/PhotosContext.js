import React from "react"
const PhotosContext = React.createContext()

function PhotosContextProvider (props) {
    const [allPhotos, setAllPhotos] = React.useState([]);
    const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    React.useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setAllPhotos(data)
                console.log(data);
            })
    }, [])

    return (
        <PhotosContext.Provider value={{allPhotos}}>
            {props.children}
        </PhotosContext.Provider>
    )
}

export {PhotosContextProvider, PhotosContext}
