function Image({className, img}) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} alt="" className="image-grid"/>
        </div>
    )
}

export default Image;
