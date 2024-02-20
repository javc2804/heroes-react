import { HeroeList } from "../components/";
import { heroes } from "../data/heroes";
export const DcPages = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />
      <ul>
        <HeroeList publisher="DC Comics" />
      </ul>
    </>
  );
};
