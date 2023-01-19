import { ChangeEvent, ChangeEventHandler, FormEvent } from "react";

export interface formState {
    name: string;
    age: number;
    cpf:string;
    country:string;
    cep: string;
    street:string;
    number: number;
    complement:string;
    email: string;
    password1: string;
    password2: string;
};

export interface inputProp{
    label:string;
    type:string;
    name: string;
    value:any;
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string;
}

