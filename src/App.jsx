import { useState, useRef } from 'react';

function App() {
  const [gierka, setGierka] = useState(false);
  const [rozdanie, setRozdanie] = useState(false);
  const [krupier, setkurpier] = useState('');
  const [gracz, setGracz] = useState('');
  var karta = '';
  var kartaGracz = '';

  function start() {
    setGierka(true);
  }

  function rozdaj() {
    setRozdanie(true);
    //var wynikKrupier = '';
    //var wynikGracz = '';

    for (var i = 0; i < 2; i++) {
      karta =
        Math.floor(Math.random(15) * 10) + Math.floor(Math.random(15) * 10);
      if (karta == 11) {
        setKrupier('J');
      } else if (karta == 12) {
        setKrupier('Q');
      } else if (karta == 13) {
        setKrupier('K');
      } else if (karta == 14) {
        setKrupier('A');
      } else if (karta < 2) {
        karta += 2;
        setKrupier(karta.toString());
      } else if (karta > 14) {
        karta = Math.floor(karta / 2);
        setKrupier(karta.toString());
      } else {
        setKrupier(karta.toString());
      }
    }

    for (var i = 0; i < 2; i++) {
      kartaGracz =
        Math.floor(Math.random(15) * 10) + Math.floor(Math.random(15) * 10);
      if (kartaGracz == 11) {
        setGracz('J');
      } else if (kartaGracz == 12) {
        setGracz('Q');
      } else if (kartaGracz == 13) {
        setGracz('K');
      } else if (kartaGracz == 14) {
        setGracz('A');
      } else if (kartaGracz < 2) {
        kartaGracz += 2;
        setGracz(kartaGracz.toString());
      } else if (kartaGracz > 14) {
        kartaGracz = Math.floor(kartaGracz / 2);
        setGracz(kartaGracz.toString());
      } else {
        setGracz(kartaGracz.toString());
      }
    }
  }

  return (
    <>
      {gierka == false && (
        <>
          <button onClick={start}>Rozpocznij Grę</button>
        </>
      )}
      {gierka == true && (
        <>
          {rozdanie == false && <button onClick={rozdaj}>Rozdaj Karty</button>}
          <h1>Ręka Krupiera: {krupier}</h1>
          <h1>Ręka Gracza: {gracz}</h1>
        </>
      )}
    </>
  );
}

export default App;
