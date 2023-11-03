function Places(props){

    return(
        <>

        <h2>{props.title}</h2>
        <img src={`../src/images/${props.imageUrl}`}/>
        <a href={props.googleMapsUrl}>This is the link to the place</a>
        <p>start date is <span>{props.startDate}</span></p>
        <p>end date is <span>{props.endDate}</span></p>
        <p>description: <span>{props.description}</span></p>

        </>




    )



}

export default Places