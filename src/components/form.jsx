import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";

const Form = () => {
  const [modal, setModal] = useState(false)
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const schema = yup.object({
    firstName: yup.string().required('El nombre es Requerido'),
    email: yup.string().email('El email no tiene un formato válido').required('El email es requerido'),
    cellphone: yup.string().matches(phoneRegExp, 'El numero de celular es invalido').required('El celular es requerido'),
    age: yup.number().transform((cv, ov) =>
      typeof ov === "string" && ov.trim() === "" ? undefined : cv
      ).min(18, "18 es la edad minima").max(100, '100 es la edad maxima').required("La edad es requerida"),
  }).required();

  const { register, reset, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    reset();
    console.log(data);
    setModal(true);
    counter();
  }

  const counter = () => {
    setTimeout(() => {
      setModal(false)
    },5000)
  }

  return(
    <>
      <div className="information">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder='Nombre Completo' />
        <p>{errors.firstName?.message}</p>
          
        <input {...register("email")} placeholder='Email'/>
        <p>{errors.email?.message}</p>

        <input {...register("cellphone")} placeholder='Celular'/>
        <p>{errors.cellphone?.message}</p>

        <input type="number" {...register("age")} placeholder='Edad'/>
        <p>{errors.age?.message}</p>
        <input type="submit"/>
      </form>
      <div className={modal? 'modalVisble' : 'modalInvisible'}>
        <p>Tu informacion fue enviada con exito, estaremos en contacto contigo</p>
      </div>
      </div>
    </>
  )
}

export default Form;