import Data from "../Data.json";
import CountryCard from "../Components/CountryCard"
// console.log(Data);
const CountryContainer = () => {
    return (
        <div className="countries-container">
            
            {
                Data.map((country ,index) => {
                   return <CountryCard {...country}  key={index} />
                })
            }
            
                
            
        </div>

    )
}

export default CountryContainer;