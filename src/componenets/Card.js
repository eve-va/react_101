export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={props.imageUrl}
                alt='city' 
                className="card--image" 
            />

            <div className="card--content">
                <h2 className="card--title">{props.title}</h2>
                <a href={props.googleMapsUrl} className="card--maps">View on Google Maps</a>
                <h3 className="card--stats">Population: {props.population}</h3>
                <h3 className="card--stats">Founded: {props.founded}</h3>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}