import PropTypes from 'prop-types';
import { ClipLoader } from "react-spinners"

const override = {
    display: 'block',
    margin: '100px auto',
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader 
    color='#4338ca'
    loading={loading}
    cssOverride={override}
    size={150}
    />
  )
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Spinner
