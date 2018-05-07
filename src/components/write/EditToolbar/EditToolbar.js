import React from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import EditorFormatBold from 'material-ui/svg-icons/editor/format-bold';

const EditToolbar = ({ handleBoldClick }) => {
  return (
    <div className="edit-toolbar">
      <IconButton tooltip="두껍게" onMouseDown={handleBoldClick}>
        <EditorFormatBold />
      </IconButton>
    </div>
  );
};

export default EditToolbar;