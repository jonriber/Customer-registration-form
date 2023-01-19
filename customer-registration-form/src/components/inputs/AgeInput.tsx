import { Fragment, useState } from "react"

const AgeInput = () => {
    const [age, setAge] = useState("");
    return(
        <Fragment>
            <h3>Age:</h3>
            <input type={"number"} placeholder='Age'/>
            <br/>
        </Fragment>
    )
};

export default AgeInput;