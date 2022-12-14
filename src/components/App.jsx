import { FeedbackOptions, Notification, Section, Statistics } from 'components';
import React from 'react';
import { WrapperStyled } from './App.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeFeedback = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good * 100) / total).toFixed(0) : 0;
  };

  render() {
    const {
      state,
      onChangeFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const totalCount = countTotalFeedback();
    return (
      <WrapperStyled>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={onChangeFeedback} />
        </Section>
        <Section title="Statistics">
          {totalCount ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={totalCount}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </WrapperStyled>
    );
  }
}
