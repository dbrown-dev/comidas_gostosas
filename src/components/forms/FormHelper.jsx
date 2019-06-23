import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

export const TextInput = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Form.Input {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div style={{ display: 'block' }} class="ui error message">
        <div class="content">
          <p>{errors[field.name]}</p>
        </div>
      </div>
    )}
  </div>
)

export const SelectInput = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Form.Field control="select" {...field} {...props}>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </Form.Field>
    {touched[field.name] && errors[field.name] && (
      <div style={{ display: 'block' }} class="ui error message">
        <div class="content">
          <p>{errors[field.name]}</p>
        </div>
      </div>
    )}
  </div>
)

export const FileInput = ({ field, form: { touched, errors, setFieldValue }, ...props }) => (
  <div>
    <div className="field">
      <label>Photo</label>
      <input
        type="file"
        onChange={event => {
          setFieldValue(field.name, event.currentTarget.files[0])
        }}
      />
    </div>
    {touched[field.name] && errors[field.name] && (
      <div style={{ display: 'block' }} class="ui error message">
        <div class="content">
          <p>{errors[field.name]}</p>
        </div>
      </div>
    )}
  </div>
)

export const TextAreaInput = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <TextArea {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div style={{ display: 'block' }} class="ui error message">
        <div class="content">
          <p>{errors[field.name]}</p>
        </div>
      </div>
    )}
  </div>
)