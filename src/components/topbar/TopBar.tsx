import styles from "./TopBar.module.css";
import {useNavigate} from "react-router-dom";

type Props = {
    text: string
    backButton?: boolean | string
    rightButton?: {
        icon: string,
        callback: () => void
    }
}

export default function TopBar(props: Props) {

    const navigate = useNavigate();

    return <div className={styles.container}>
        {
            props.backButton ?
                <div className={[styles.backArrow, 'material-icons'].join(' ')} onClick={() => {
                    if(typeof(props.backButton) === "string") {
                        navigate(props.backButton)
                    }
                    else {
                        navigate(-1)
                    }
                }}>
                    arrow_back_ios
                </div> :
                <></>
        }
        <div className={styles.text}>
            {props.text}
        </div>
        {
            props.rightButton ? <div className={[styles.rightButton, 'material-icons'].join(' ')} onClick={props.rightButton.callback}>{props.rightButton.icon}</div> : <></>
        }
    </div>
}