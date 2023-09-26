import { Link } from "react-router-dom";

const CountryCard = ({name,flags,region,population,capital}) => {

    return (
       <>
            <img src={flags.svg} alt={name.common}/>
            <div className="card-text">
                <h3 className="card-title">{name.common}</h3>
                <p>
                    <b>Population: </b>{population.toLocaleString("en-IN")}
                </p>
                <p>
                    <b>Region: </b>{region}
                </p>
                <p>
                    <b>Capital: </b>{capital?.[0]}
                </p>
            </div>
        </>
    )
}

export default CountryCard;