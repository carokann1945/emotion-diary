import style from './Button.module.css';
import type { ButtonProps } from '@/types';

const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <button className={`${style.Button} ${style[type]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
