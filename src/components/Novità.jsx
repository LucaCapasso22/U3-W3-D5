function Novità() {
  return (
    <>
      <div className="text-white mx-2">
        <h1 className="text-start ms-3">Novità</h1>
        <hr
          style={{
            width: '95%',
            height: '2px',
            backgroundColor: '#333',
            border: 'none',
            margin: '20px auto', // Centra la linea orizzontale
          }}
        />
        <div className="row p-2">
          <div className="col text-start ">
            <h6 className="mb-1 textSemiDark">NUOVA STAZIONE RADIO</h6>
            <h4 className="mb-1">
              Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
            </h4>
            <img
              src="/assets/images/1a.png"
              alt="Nuova stazione radio"
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col text-start">
            <h6 className="mb-1 textSemiDark">NUOVA STAZIONE RADIO</h6>
            <h4 className="mb-1">Ecco la nuova casa della musica latina</h4>
            <img
              src="/assets/images/1b.png"
              alt="Nuova stazione radio"
              className="img-fluid rounded-3"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Novità
