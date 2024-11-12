import "./styles.css";

function AnimalCar ({animalName, animalSpecies, animalImage, children}){
    return (<div className="animal-card-wrapper">
        <h3>{animalName}</h3>
        <div>{animalSpecies}</div>
        <img src={animalImage} alt="" />
        {children}
    </div>
    );
}

export default AnimalCar;