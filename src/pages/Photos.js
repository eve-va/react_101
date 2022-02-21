import {useContext} from "react"
import {PhotosContext} from "../PhotosContext"
import {getClass} from "../utils"
import Image from "../components/Image"

function Photos() {
    const {allPhotos} = useContext(PhotosContext);

    const imageElements = allPhotos.map((img, i) => {
        return (
            <Image 
                key={img.id}
                img={img}
                className={getClass(i)}
            />
        )
    })

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos;
