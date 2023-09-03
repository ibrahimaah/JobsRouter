import { Link, useRouteError } from 'react-router-dom'

const CareerError = () => {
    const error = useRouteError();
  return (
    <div className='career-error'>
        <p>Error - {error.message}</p>
        <Link to="/">Back to the Homepage</Link>
    </div>
  )
}

export default CareerError