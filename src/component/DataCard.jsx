import './css/datas.css'
import PropTypes from 'prop-types'

const DataCard = ({data}) => {
  return (
    <div className="data-items">
        <div>{data.title}</div>
        <div>{data.content}</div>
    </div>
  )
}

DataCard.propTypes = {
    data: PropTypes.object.isRequired
  };

export default DataCard