import React from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import EditorFormatBold from 'material-ui/svg-icons/editor/format-bold';

const EditToolbar = ({ handleBoldClick, handleH2Click }) => {
  return (
    <div className="edit-toolbar">
      <IconButton tooltip="두껍게" onMouseDown={handleBoldClick}>
        <EditorFormatBold />
      </IconButton>
      <FlatButton tooltip="H2" onMouseDown={handleH2Click}>
        H2
      </FlatButton>
    </div>
  );
};

export default EditToolbar;