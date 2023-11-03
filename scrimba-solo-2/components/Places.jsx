// import "../src/App.css"

function Places(props){

    return(
        <div className="body-container">

        <h2>{props.title}</h2>

        <div className="picture-and-link">
        <img src={`../src/images/${props.imageUrl}`} className="place--image"/>
        <a href={props.googleMapsUrl} target="_blank">This is the link to the place</a>
        </div>

        <p>start date is <span>{props.startDate}</span></p>
        <p>end date is <span>{props.endDate}</span></p>
        <p className="description-paragraph"><span className="description-header">Description </span>{`: ${props.description}`} </p>
        

        </div>




    )



}

export default Places