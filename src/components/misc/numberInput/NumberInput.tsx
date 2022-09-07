import styles from "./NumberInput.module.css"
import {useState} from "react";

type Props = {
    displayName: string,
    startingValue: number,
    minValue?: number,
    maxValue?: number
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
            <div className={[styles.symbol, 'material-icons'].join(' ')} onClick={() => setValue(Math.min(value + 1, (props.maxValue || Number.POSITIVE_INFINITY)))}>
                add
            </div>
            <input value={value} className={styles.numberInput} onChange={(e) => setValue(Math.max(Math.min(parseInt(e.target.value), (props.maxValue || Number.POSITIVE_INFINITY)), (props.minValue || Number.NEGATIVE_INFINITY)))}/>
            <div className={[styles.symbol, 'material-icons'].join(' ')} onClick={() => setValue(Math.max(value - 1, (props.minValue || Number.NEGATIVE_INFINITY)))}>
                remove
            </div>
        </div>
    </div>
}