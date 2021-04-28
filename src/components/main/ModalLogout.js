import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      }
}))


const ModalLogout = () => {

    const classes = useStyles();

    return (
        <div className="modal">
            <div className="modal__top">
                <Avatar className={ classes.small}/>
                <div className="modal__user-info">
                    <p>Gabriel Luis</p>
                    <span>Ver tu perfil</span>
                </div>
            </div>

            <div className="modal__separator"></div>

            <div className="modal__bottom">
                <div className="modal__close-icon"> 
                    <MeetingRoomIcon fontSize="inherit"/> 
                </div>
                <p>Cerrar sesión</p>
            </div>            
        </div>
    )
}

export default ModalLogout
