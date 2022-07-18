import styles from "./NumberInput.module.css"
import {useState} from "react";

type Props = {
    displayName: string,
    startingValue: number
}

export default function NumberInput(props: Props) {

    const [value, setValue] = useState(props.startingValue)

    return <div className={styles.container}>
        <div className={styles.displayName}>
            {
                props.displayName
            }
        </div>
        <div className={styles.numberContainer}>
            <div className={[styles.symbol, 'material-icons'].join(' ')} onClick={() => setValue(value + 1)}>
                add
            </div>
            <input value={value} className={styles.numberInput} onChange={(e) => setValue(parseInt(e.target.value))}/>
            <div className={[styles.symbol, 'material-icons'].join(' ')} onClick={() => setValue(value - 1)}>
                remove
            </div>
        </div>
    </div>
}