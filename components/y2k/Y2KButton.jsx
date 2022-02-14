import styles from './Y2KButton.module.css'

const Y2KButton = ({onClick, action}) => {
  return (
    <button
      onClick={onClick}
      className={styles['y2k-button']}
    >
      {action}
    </button>
  );
}

export default Y2KButton;
