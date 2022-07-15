import styles from "./HomePage.module.css";
import TopBar from "../topbar/TopBar";

export default function HomePage() {

    return <div className={styles.container}>
        <TopBar text="Home"/>
        <div className={styles.buttons}>
            <div className={styles.button}>
                <div className={[styles.icon, 'material-icons'].join(' ')}>
                    library_books
                </div>
                <div className={styles.text}>
                    Games
                </div>
            </div>
            <div className={styles.button}>
                <div className={[styles.icon, 'material-icons'].join(' ')}>
                    group
                </div>
                <div className={styles.text}>
                    Characters
                </div>
            </div>
            <div className={styles.button}>
                <div className={[styles.icon, 'material-icons'].join(' ')}>
                    local_library
                </div>
                <div className={styles.text}>
                    Wiki
                </div>
            </div>
        </div>
    </div>
}