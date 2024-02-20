import { useMemo } from "react";
import { HeroeCard } from "./";
import { getHeroesByPublisher } from "../helpers/";

export const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((heroe) => (
          <HeroeCard key={heroe.id} {...heroe} />
        ))}
      </div>
    </>
  );
};

export default HeroeList;
