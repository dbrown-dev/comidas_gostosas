import React from 'react'

const FileInput = ({ name, touched, errors, setFieldValue, ...props }) => (
  <div>
    <div className="field">
      <label>Photo</label>
      <input
        type="file"
        onChange={event => {
          setFieldValue( name, event.currentTarget.files[0])
        }}
      />
    </div>
    {touched[name] && errors[name] && (
      <div style={{ display: 'block' }} class="ui error message">
        <div class="content">
          <p>{errors[name]}</p>
        </div>
      </div>
    )}
  </div>
)

export default FileInput
