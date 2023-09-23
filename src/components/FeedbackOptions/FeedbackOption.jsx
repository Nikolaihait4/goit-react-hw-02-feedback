import css from './FeedbackOption.module.css';

export const FeedbackOption = ({ handleAddFeedback }) => {
  return (
    <div className={css.feedbacksection}>
      <ul className={css.feedbackcomponent}>
        <li className={css.feedbackitem}>
          <button
            className={css.feedbackbutton}
            type="button"
            onClick={() => handleAddFeedback('good')}
          >
            Good
          </button>
        </li>
        <li className={css.feedbackitem}>
          <button
            className={css.feedbackbutton}
            type="button"
            onClick={() => handleAddFeedback('neutral')}
          >
            Neutpal
          </button>
        </li>
        <li className={css.feedbackitem}>
          <button
            className={css.feedbackbutton}
            type="button"
            onClick={() => handleAddFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
