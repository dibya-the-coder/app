import './datas.css'
import PropTypes from 'prop-types'

const DataCard = ({data}) => {
  return (
    <div className="data-items">
        <div>{data.name}</div>
        <div>{data.email}</div>
    </div>
  )
}

DataCard.propTypes = {
    data: PropTypes.object.isRequired
  };

export default DataCard