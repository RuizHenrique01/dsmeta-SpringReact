import axios from "axios";
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './index.css';

type Props = {
    saleId: number;
}

function handleClick(saleId: Number){
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => {
            handleClick(saleId);
        }}>
            <img src={icon} alt="Notificar" />
        </div>
    );
}

export default NotificationButton;
