import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registrován nový uživatel ${userName} ze země ${country}`);
  };

  const [userName, setUserName] = useState('');
  const handleName = (e) => {
    console.log(setUserName(e.target.value));
  };

  const [country, setCountry] = useState('Česká republika');
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const [stav, setStav] = useState(false);
  const handleStav = (e) => {
    setStav(e.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Uživatelské jméno:
        <input value={userName} onChange={handleName} type="text" />
      </label>
      <button disabled={userName === '' ? true : false} type="submit">
        Registrovat
      </button>
      <div style={{ display: userName === '' ? 'block' : 'none' }}>
        Uživatelské jméno je povinný údaj
      </div>
      <label>
        Země původu:
        <select value={country} onChange={handleCountry}>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Česká republika">Česká republika</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>
      <input value={stav} onChange={handleStav} type="checkbox"></input>
      <label>Souhlasím s obchodními podmínkami</label>
    </form>
  );
};

render(<App />, document.querySelector('#app'));

/* kod z vykladu
import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
const App = () => {
  const [age, setAge] = useState(34);
  const handleClick = () => {
    setAge(age + 1);
  };
  const handleAgeChange = (e) => {
    setAge(Number(e.target.value));
  }
  return (
    <div className="container">
      <label>
        Zadej svůj věk:
        <input value={age} type="text" onChange={handleAgeChange} />
      </label>
      <div style={{
        color: age < 40 ? 'gray' : 'red'
      }}>
        Můj věk: {age}
      </div>
      <button onClick={handleClick}>Mačkej</button>
    </div>
  );
};
render(<App />, document.querySelector('#app'));
*/
