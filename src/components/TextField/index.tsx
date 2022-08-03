import React, { useRef, useEffect } from 'react'
import { useField, ErrorMessage } from 'formik'
import TextfieldStyle from './TextfieldStyle'

export interface TextFieldProps{
  focus?: boolean,
  inputmode?: string,
  label: string,
  name: string,
  placeholder: string,
  type: string
}

const TextField:React.FC<TextFieldProps> = ({ name, type, placeholder, focus }) => {
  const [field, meta] = useField({ name, placeholder, type })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focus) inputRef.current?.focus()
  }, [])
  return (
    <TextfieldStyle>
        {/* <label className='labelField' htmlFor={field.name}>{label}</label> */}
        <input className={`inp-field ${meta.touched && meta.error ? 'isInvalid' : ''} ` }
            {...field} name={name} type={type} placeholder={placeholder}
            ref={focus ? inputRef : undefined} autoComplete='off'
        />
        <div className='error'>
          <ErrorMessage className='error__msg' name={field.name} component="p" />
        </div>
    </TextfieldStyle>
  )
}

export default TextField
