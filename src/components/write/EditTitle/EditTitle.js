import React from 'react';
import TextField from 'material-ui/TextField';

const titleStyle = {
  input: {
    height: '70px', 
    fontSize: '32px'
  },
  hint: {
    height: '32px'
  },
} 

const EditTitle = () => {
  return (
    <div className="edit-title">
      <TextField
        hintText="제목"
        fullWidth={true}
        style={titleStyle.input}
        hintStyle={titleStyle.hint}
      />
    </div>
  );
};

export default EditTitle;