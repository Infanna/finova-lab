import TransactionMenu from "../../components/TransactionMenu/TransactionMenu";
import styles from "./main.module.scss";
export default function MainPage() {
  return (
    <div>
      <div className={`${styles.navBarBlock}`}>nav-bar</div>
      <div className={`${styles.greetingBlock}`}>สวัสดีครับคุณธนชาติ</div>
      <div className={`${styles.contentBlock}`}>
        <div className={`${styles.contentCard}`}>My Work</div>
        <div className={`${styles.contentCard}`}>
          เมนูทำธุรกรรม <TransactionMenu></TransactionMenu>
        </div>
        <div className={`${styles.contentCard}`}>รายการอื่นๆ</div>
      </div>
      <div className={`${styles.footer}`}>Footer</div>
    </div>
  );
}
