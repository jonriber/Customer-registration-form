import { Fragment } from "react"
import { inputProp } from "../../types/commonTypes";

const FormInput = (props: inputProp) => {
    const {
        label="",
        type="text",
        name,
        value,
        onChange,
        placeholder=""
    } = props;

    return(
        <Fragment>
            <div className="formInput">
                <h3>{label}</h3>
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={e => onChange(e)}/>
                <br/>
            </div>
        </Fragment>
    )
};

export default FormInput;