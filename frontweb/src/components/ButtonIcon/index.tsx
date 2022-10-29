import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg'

const ButtonIcon = () => {
  return (
    <button className="btn btn-primary btn-icon">
        <div className='content-text'>
        <h6>Inicie agora a sua busca</h6>
        </div>
      <div className="arrow">
        <ArrowIcon />
      </div>
    </button>
  );
};

export default ButtonIcon;
