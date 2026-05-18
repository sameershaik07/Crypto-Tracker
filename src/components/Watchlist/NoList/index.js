import Button from '../../common/Button'
import { Link } from 'react-router-dom'
import "./style.css"

function NoList() {
    return (
        <div className='noList'>
            <h2 style={{color: 'var(--white)'}}>No coins in watchlist</h2>
            <Link to={'/dashboard'}>
                <Button text={"Dashboard"} outline={true}/>
            </Link>
        </div>
    )
}

export default NoList