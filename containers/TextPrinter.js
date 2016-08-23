import { connect } from 'react-redux'
import Item from '../components/Item'

const mapStateToProps = (state) => {
  console.log(state.item)
  return state.item
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const TextPrinter = connect(
  mapStateToProps//,
  //mapDispatchToProps
)(Item)

export default TextPrinter
