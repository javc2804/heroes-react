import { HeroeList } from "../components/";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <ul>
        <HeroeList publisher="Marvel Comics" />
      </ul>
    </>
  );
};
