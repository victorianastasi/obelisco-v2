
export default function Home () {
  return (
    <main>
      {/* <button className="btn btn-primary">hola</button> */}

      <h1 className="headline-lg">nunito</h1>
      <p className="text-xs">open</p>

      <div className="storybook__container-banner">
        <div className="banner">
          <div className="banner-content">
            <p className="banner-text">
              Esta descripción de banner
              <strong>puede tener énfasis</strong>
              y
              <a href="#" target="_blank" rel="noreferrer">enlace</a>
              .
            </p>
          </div>
        </div>
        <div className="banner banner-dark">
          <div className="banner-content">
            <p className="banner-text">
              Esta descripción de banner <strong>puede tener énfasis</strong> y <a href="#" target="_blank" rel="noreferrer">enlace</a>.
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}
