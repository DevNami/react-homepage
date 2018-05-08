import React, { Component } from 'react'
import EditTitle from 'components/write/EditTitle';
import EditToolbar from 'components/write/EditToolbar';
import EditArea from 'components/write/EditArea';

function createCaretPlacer(atStart) {
  return function(el) {
      el.focus();
      if (typeof window.getSelection !== "undefined"
              && typeof document.createRange !== "undefined") {
          var range = document.createRange();
          range.selectNodeContents(el);
          range.collapse(atStart);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
      } else if (typeof document.body.createTextRange !== "undefined") {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(atStart);
          textRange.select();
      }
  };
}

var placeCaretAtStart = createCaretPlacer(true);
var placeCaretAtEnd = createCaretPlacer(false);

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

    if (activeElement === editInput) {
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

  handleH2Click = () => {
    const editInput = this.editInput.current
    const { activeElement } = document

    if (activeElement === editInput) {
      const selection = document.getSelection()
      const {
        type,
        anchorNode
      } = selection

      if (type === 'Caret') {
        const { parentElement } = anchorNode
        const h2 = document.createElement('h2')
        const br = document.createElement('br')
        h2.appendChild(br)

        activeElement.replaceChild(h2, anchorNode)

        setTimeout(function () {
          activeElement.focus()
        }, 0)
      }
    }
  }

  handleKeyPress = e => {
    if (e.which !== 13) return true
    
    const editInput = this.editInput.current
    
    const p = document.createElement('p')
    const br = document.createElement('br')
    p.appendChild(br)
    editInput.appendChild(p)

    placeCaretAtStart(p)

    e.preventDefault()
    return false
  }

  render() {
    const {
      handleBoldClick,
      handleH2Click,
      handleKeyPress,
      editInput,
    } = this
    const {
      data
    } = this.state

    return (
      <div>
        <EditTitle />
        <EditToolbar 
          handleBoldClick={handleBoldClick} 
          handleH2Click={handleH2Click}
        />
        <EditArea 
          data={data}
          editInput={editInput}
          handleKeyPress={handleKeyPress}
        />
      </div>
    )
  }
}

export default WriteContainer;