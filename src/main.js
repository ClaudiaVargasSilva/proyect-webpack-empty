import React from 'react';

const Main = ({ adds, resta }) => <h1 className="text-danger">Hola <i className="fas fa-globe fa-5x"></i> Mundo {adds(5, 5)} {resta(23, 6)}</h1>;

export default Main;