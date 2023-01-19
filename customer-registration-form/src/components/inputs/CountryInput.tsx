import { Fragment, useState } from "react"

const CountryInput = () => {
    const [country, setCpf] = useState("");
    return(
        <Fragment>
            <h3>Country:</h3>
            <input type={"text"} placeholder='Country:'/>
            <br/>
        </Fragment>
    )
};

export default CountryInput;