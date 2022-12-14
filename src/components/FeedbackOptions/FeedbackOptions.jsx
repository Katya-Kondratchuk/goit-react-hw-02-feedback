import PropTypes from 'prop-types';
import { ImSad2 } from 'react-icons/im';
import { BsFillEmojiNeutralFill } from 'react-icons/bs';
import { FaSmile } from 'react-icons/fa';
import { SiFacepunch } from 'react-icons/si';
import { ButtonsStyled } from './FeedbackOptons.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const switchImg = name => {
    switch (name) {
      case 'bad':
        return <ImSad2 color="red" />;

      case 'good':
        return <FaSmile color="green" />;

      case 'neutral':
        return <BsFillEmojiNeutralFill color="yellow" />;

      default:
        return <SiFacepunch />;
    }
  };

  return (
    <div>
      {Object.keys(options).map((name, index) => (
        <ButtonsStyled
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(name)}
        >
          <span>{switchImg(name)}</span>
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
