// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImgs = () => {
    const {isActive} = this.state
    const plusAndMinusImg = isActive ? minusImg : plusImg
    const altTxt = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onClickToggle}>
        <img src={plusAndMinusImg} alt={altTxt} className="image" />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="questions-container">
          <h1 className="questions">{questionText}</h1>
          {this.renderImgs()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
