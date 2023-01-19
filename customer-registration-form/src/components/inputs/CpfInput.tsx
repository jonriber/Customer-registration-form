import { Fragment, useState } from "react"

const CpfInput = () => {
    const [cpf, setCpf] = useState("");
    return(
        <Fragment>
             <h3>CPF:</h3>
            <input type={"number"} placeholder='CPF'/>
            <br/>
        </Fragment>
    )
};

export default CpfInput;