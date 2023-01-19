import { ChangeEvent, useState } from 'react'
import './App.css'
import AgeInput from './components/inputs/AgeInput'
import CountryInput from './components/inputs/CountryInput'
import CpfInput from './components/inputs/CpfInput'
import FormInput from './components/inputs/FormInput'
import NameInput from './components/inputs/NameInput'
import { formState } from './types/commonTypes'

function App() {
  const [form, setForm] = useState<formState>({
    name:"",
    age: 0,
    cpf:"",
    country:"",
    cep:"",
    street:"",
    number: 0,
    complement:"",
    email: "",
    password1: "",
    password2: ""
  }),
  handleFormState = (event: ChangeEvent<HTMLInputElement>) => {

    console.log("Event:",event);
    let target = event.target as HTMLInputElement;
    console.log("target:",target)
    const 
      {name,value} = target,
      updateForm = {
        ...form,
        [name]: value
      };
    console.log("CHANGING FORM STATE:",updateForm);
    setForm(updateForm)
  };

  return (
    <div className="App">
      <div className='form'>
        <h2>Registration</h2>
        <br/>
        <FormInput label='Name:' type='text' name='name' value={form.name} placeholder={"Type your name"} onChange={handleFormState}/>
        <FormInput label="Age:" placeholder={'Type your age'} type='number' name='age' value={form.age} onChange={handleFormState}/>
        <FormInput label='CPF:' placeholder={'Type your cpf'}  type='text' name='cpf' value={form.cpf} onChange={handleFormState}/>
        <FormInput label='Country:' placeholder={'Your Country'} type='text' name='country' value={form.country} onChange={handleFormState}/>
        <FormInput label='CEP:' placeholder={'Type your CEP'} type='text' name='cep' value={form.cep} onChange={handleFormState}/>
        <FormInput label='Street Name:' placeholder={'Street name'} type='text' name='street' value={form.street} onChange={handleFormState}/>
        <FormInput label='Adress Number:' placeholder={'Adress Number'} type='number' name='number' value={form.number} onChange={handleFormState}/>
        <FormInput label='Adress Complement:' placeholder={'Adress Complement'} type='text' name='complement' value={form.complement} onChange={handleFormState}/>
        <FormInput label='Email:' placeholder={'Your Email'} type='email' name='email' value={form.email} onChange={handleFormState}/>
        <FormInput label='Password' placeholder={'Choose a passward'} type='password' name='password1' value={form.password1} onChange={handleFormState}/>
        <FormInput label='Confirm Password' placeholder={'Type again.'}  type='password' name='password2' value={form.password2} onChange={handleFormState}/>

      </div>
    </div>
  )
}

export default App
