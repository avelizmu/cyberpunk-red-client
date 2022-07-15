import styles from "./TopBar.module.css";
import {useNavigate} from "react-router-dom";

type Props = {
    text: string
    backButton?: boolean
}

export default function TopBar(props: Props) {

    const navigate = useNavigate();

    return <div className={styles.container}>
        {
            props.backButton ?
                <div className={[styles.backArrow, 'material-icons'].join(' ')} onClick={() => {
                    navigate(-1)
                }}>
                    arrow_back_ios
                </div> :
                <></>
        }
        <div className={styles.text}>
            {props.text}
        </div>
    </div>
}