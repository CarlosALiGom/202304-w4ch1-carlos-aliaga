import Gentlemen from "./Gentlemen/Gentlemen";
import GentlemanStructure from "./Gentlemen/types";

const App = (): JSX.Element => {
  const gentlemen: GentlemanStructure[] = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  return (
    <div className="container">
      <header className="main-header">
        <p className="info">0 señores que te apuntan con el dedo marcados</p>
        <button type="button" className="button button--select">
          Marcar todos
        </button>
      </header>
      <section className="controls"></section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => (
            <Gentlemen {...gentleman} key={gentleman.id} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
