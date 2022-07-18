import styles from "./StringInput.module.css"
import {useState} from "react";

type Props = {
    displayName: string,
    startingValue: string
}

export default function StringInput(props: Props) {

    const [value, setValue] = useState(props.startingValue);

    return <div className={styles.container}>
        <input value={value} type="text" className={[styles.input, value.length ? styles.full : ''].join(' ')} onChange={(e) => setValue(e.target.value)}/>
        <label className={styles.label}>{props.displayName}</label>
    </div>
}