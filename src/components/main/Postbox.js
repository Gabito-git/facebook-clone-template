import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
// import ModalPost from './ModalPost';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4.5),
        height: theme.spacing(4.5),
      }
}))

const Postbox = () => {

    const classes = useStyles();

    return (
        <div className="postbox">
            <div className="postbox__top">
                <Avatar className={ classes.small}/>
                <div className="postbox__input-box">
                    <input placeholder="¿Qué estas pensando, Gabriel ?" />
                </div>
            </div>
            
            <div className="postbox__bottom">
                <div className="postbox__option">
                    <div className="postbox__icon postbox__icon--red">
                        <VideocamIcon fontSize='inherit' />
                    </div>
                    <p>Video en vivo</p>
                </div>
                <div className="postbox__option ">
                    <div className="postbox__icon postbox__icon--green">
                         <PhotoLibraryIcon fontSize='inherit' />
                    </div>
                    <p>Foto/video</p>
                </div>
                <div className="postbox__option ">
                    <div className="postbox__icon postbox__icon--yellow">
                         <InsertEmoticonIcon fontSize='inherit' />
                    </div>
                    <p>Sentimiento/actividad</p>
                </div>

            </div> 

            {/* <ModalPost />            */}
        </div>
    )
}

export default Postbox
