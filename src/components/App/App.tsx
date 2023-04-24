const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <p className="info">0 señores que te apuntan con el dedo marcados</p>
        <button type="button" className="button button--select">
          Marcar todos
        </button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/fary.jpg"
                alt="The Fary apuntándote con el dedo"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">The Farytale</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Estado:</span> RIP
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  pendiente
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/fary.jpg"
                alt="The Fary apuntándote con el dedo"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">The Farytale</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Estado:</span> RIP
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  pendiente
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/fary.jpg"
                alt="The Fary apuntándote con el dedo"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">The Farytale</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Estado:</span> RIP
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  pendiente
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="img/fary.jpg"
                alt="The Fary apuntándote con el dedo"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">The Farytale</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profesión:</span>
                  Influencer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Estado:</span> RIP
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  pendiente
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
