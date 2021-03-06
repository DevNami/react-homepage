import React from 'react';

import './EditArea.scss';

const renderData = data => {
  const renderArr = [
      '가나다라마바사',
      <b>아자</b>,
      '차카타파하'
  ]

  return renderArr
}

const EditArea = ({ data, editInput, handleKeyPress }) => {
  return (
    <div className="edit-area">
      <div className="content">
        <div 
          className="input" 
          contentEditable="true" 
          onKeyPress={handleKeyPress}
          ref={editInput} 
        >
          <p><br/></p>
        </div>
      </div>
    </div>
  );
};
      
      // 가나다라마바사<b>아자</b>차카타파하
export default EditArea;