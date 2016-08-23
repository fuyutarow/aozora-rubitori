import { connect } from 'react-redux'
import ItemList from '../components/ItemList'

const mapStateToProps = (state) => {
  return {
    urls: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const TextPrinter = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default TextPrinter
