import {AiOutlineShoppingCart} from 'react-icons/ai'
import  Badge  from 'react-bootstrap/Badge'

const CardWidget = () =>{
    return(
        <div>
            <AiOutlineShoppingCart/>
            <Badge bg="danger">New</Badge>
        </div>
    )
}

export default CardWidget