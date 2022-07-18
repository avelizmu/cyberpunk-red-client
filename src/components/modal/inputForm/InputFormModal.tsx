import styles from "./InputFormModal.module.css"
import Modal from "../base/Modal";
import NumberInput from "../../misc/numberInput/NumberInput";
import StringInput from "../../misc/stringinput/StringInput";

type Input = {
    type: 'string' | 'number',
    key: string,
    displayName: string
}


type Props = {
    visible: boolean,
    title: string,
    inputs: Input[]
}

export default function InputFormModal(props: Props) {
    return <Modal visible={props.visible}>
        <div className={styles.container}>
            <div className={styles.title}>
                {
                    props.title
                }
            </div>
            <div>
                {
                    props.inputs.map(input => {
                        if(input.type === 'number') {
                            return <NumberInput displayName={input.displayName} startingValue={0}/>
                        }
                        return <StringInput displayName={input.displayName} startingValue=""/>
                    })
                }
            </div>
        </div>
    </Modal>
}