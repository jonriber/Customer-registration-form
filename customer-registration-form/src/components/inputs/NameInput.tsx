import { Fragment, useState } from "react"

const NameInput = () => {
    const [name, setName] = useState("");
    return(
        <Fragment>
            <h3>Name:</h3>
            <input type={"text"} placeholder='Name'/>
            <br/>
        </Fragment>
    )
};

export default NameInput;