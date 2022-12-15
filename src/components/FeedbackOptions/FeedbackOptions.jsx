import PropTypes from 'prop-types';
import { ImSad2 } from 'react-icons/im';
import { BsFillEmojiNeutralFill } from 'react-icons/bs';
import { FaSmile } from 'react-icons/fa';
import { SiFacepunch } from 'react-icons/si';
import { ButtonsStyled } from './FeedbackOptons.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const images = {
    bad: <ImSad2 color="#a30909" />,
    good: <FaSmile color="#1ae80f" />,
    neutral: <BsFillEmojiNeutralFill color="#f8cc0a" />,
  };

  return (
    <div>
      {Object.keys(options).map((name, index) => (
        <ButtonsStyled
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(name)}
          name={name}
        >
          {images[name] || <SiFacepunch />}
          {name}
        </ButtonsStyled>
      ))}
    </div>
  );
};

export default FeedbackOptions;

Notification.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
