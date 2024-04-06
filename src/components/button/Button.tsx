import React, { useEffect, useState } from 'react';
import "./Button.css";
import { navigate } from 'astro/virtual-modules/transitions-router.js';

interface ButtonProps {
  texto: string;
  accion: string;
  onCountChange: (newCount: number) => void;
}

const Button: React.FC<ButtonProps> = ({ texto, accion, onCountChange }) => {
  const [count, setCount] = useState(0);
  const [buttonSize, setButtonSize] = useState(100); 
  const [textBtn, setTextBtn] = useState(texto)

  const textosNegativos = ['Te confundiste, acá es no', 'No es por acá', 'Simplemente no', 'Si seguis, no va a entrar mas texto', 'La luna está en cuarto positivo', 'Harry Potter diría que sí', 'Homero se pondrá triste', 'No se que decir', 'Teletubbies'];

  const handleClick = () => {
    if (accion === 'negativa') {
      setCount(prevCount => prevCount + 1);
      setButtonSize(prevSize => prevSize - 5); 
      setTextBtn(textosNegativos[count] ? textosNegativos[count] : 'No ↑');
      onCountChange(count);
    } else {
      const url = 'gracias?c=' + localStorage.getItem('count');
      navigate(url);
    }
  };

  useEffect(() => {
    if (accion === 'negativa') {
      localStorage.setItem('count', count.toString());
    }
  }, [count, accion]);

  const buttonStyle = {
    width: `${buttonSize}%`, 
    margin: 'auto',
    minWidth: '25%'
  };

  const classes = accion === 'negativa' 
                  ? 'btn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' 
                  : 'btn text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 m-auto'

  return (
    <button
      type="button"
      style={buttonStyle} 
      className={classes}
      onClick={handleClick}
    >
      {textBtn}
    </button>
  );
};

export default Button;