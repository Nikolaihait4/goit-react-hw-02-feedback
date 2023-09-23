import css from './Notification.module.css';
export function Notification({ message }) {
  return <p className={css.notmessage}>{message}</p>;
}
