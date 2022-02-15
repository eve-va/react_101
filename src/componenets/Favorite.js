import Toggler from "./Toggler"

function Favorite() {
    return (
        <Toggler render={
            ({on, toggle}) => (
                <div>
                    <h3>Click heart to favorite</h3>
                    <h1>
                        <span 
                            onClick={toggle}
                        >
                            {on ? "❤️" : "♡"}
                        </span>
                    </h1>
                </div>
            )
        }/>
    )
}

export default Favorite;

