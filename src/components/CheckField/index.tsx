import React from 'react'
import { useField, ErrorMessage } from 'formik'
import CheckFieldStyle from './CheckFieldStyle'

export interface CheckFieldProps{
  name: string
  required?: boolean,
  value: string
}

const CheckField:React.FC<CheckFieldProps> = ({ name, value, required = false }) => {
  const [field, meta] = useField({ name, value })
  return (
    <CheckFieldStyle>
        <input className={`inp-field ${meta.touched && meta.error ? 'isInvalid' : ''} ` }
            {...field} name={name} type={'checkbox'} required={required} id={name}/>

        {<label className='label-field' htmlFor={field.name}>{value}</label> }
        <div className='error'>
          <ErrorMessage className='error__msg' name={field.name} component="p" />
        </div>
    </CheckFieldStyle>
  )
}

export default CheckField
