interface GentlemenProps {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

const Gentlemen = ({
  id,
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
}: GentlemenProps): JSX.Element => {
  const getFirstLetter = (name: string): string => {
    const nameParts = name.split(" ");

    return nameParts[0].length > 3 ? nameParts[0][0] : nameParts[1][0];
  };

  return (
    <>
      <li key={id} className="gentleman">
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={`img/${picture}`}
            alt={alternativeText}
          />
          <span className="gentleman__initial">{getFirstLetter(name)}</span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">Profesión:</span>
              {profession}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Estado:</span> {status}
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:</span> {twitter}
            </li>
          </ul>
        </div>
        <i className="icon gentleman__icon fas fa-check"></i>
      </li>
    </>
  );
};

export default Gentlemen;
