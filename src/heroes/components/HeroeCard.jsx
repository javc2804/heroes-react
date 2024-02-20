import { Link } from "react-router-dom";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;
  const CharacterByHero = ({ characters, alter_ego }) =>
    characters === alter_ego ? <></> : <p>{characters}</p>;
  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImageUrl} alt={superhero} className="card-img" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <div className="card-title">{superhero}</div>
                <p className="card-text">
                  <CharacterByHero
                    characters={characters}
                    alter_ego={alter_ego}
                  />
                </p>
                <p className="card-text">
                  <small>{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`}>Mas informacion</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroeCard;
