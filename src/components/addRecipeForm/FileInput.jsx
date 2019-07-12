import React from 'react'
import Input from '@material-ui/core/Input'
import {FormLabel, Button} from '@material-ui/core';

const FileInput = ({ name, touched, errors, setFieldValue, ...props }) => (
<Button
  variant="raised"
  component="label"
>
  Upload Photo
  <Input
    type="file"
    style={{ display: "none" }}
    onChange={event => {
      setFieldValue( name, event.currentTarget.files[0])
    }}
    {...props}
  />
</Button>

  // <div>
  //     <FormLabel>Photo</FormLabel>
  //     <Input
  //       type="file"
        
  //     />

  //   {touched[name] && errors[name] && (
  //     <div style={{ display: 'block' }} className="ui error message">
  //       <div className="content">
  //         <p>{errors[name]}</p>
  //       </div>
  //     </div>
  //   )}
  // </div>
)

export default FileInput
