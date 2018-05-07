import React, { Component } from 'react'
import EditTitle from 'components/write/EditTitle';
import EditToolbar from 'components/write/EditToolbar';
import EditArea from 'components/write/EditArea';

class WriteContainer extends Component {
  state = {
    data: `
가나다라마바사<b>아자</b>차카타파하
    `
  }

  editInput = React.createRef()

  componentDidMount = () => {

  }

  handleBoldClick = e => {
    const editInput = this.editInput.current
    const { activeElement } = document

    if (activeElement == editInput || editInput.contains(activeElement)) {
      const selection = document.getSelection()
      const startIndex = selection.anchorOffset
      const endIndex = selection.extentOffset
      const parentNode = selection.anchorNode.parentElement
      let str = parentNode.innerHTML;
      let tmpStart = str.substring(0, startIndex)
      let tmpEnd = str.substr(endIndex)
      let tmpMiddle = str.substring(startIndex, endIndex)
   
      let completedStr = `${tmpStart}<b>${tmpMiddle}</b>${tmpEnd}`

      parentNode.innerHTML = completedStr
    }
  }

  render() {
    const {
      handleBoldClick,
      editInput
    } = this
    const {
      data
    } = this.state

    return (
      <div>
        <EditTitle />
        <EditToolbar 
          handleBoldClick={handleBoldClick} 
        />
        <EditArea 
          data={data}
          editInput={editInput}
        />
      </div>
    )
  }
}

export default WriteContainer;