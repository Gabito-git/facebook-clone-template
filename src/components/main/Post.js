import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
// import ModalEditPost from './ModalEditPost';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4.2),
        height: theme.spacing(4.2),
      }
}))

const Post = () => {

    const classes = useStyles();

    return (
        <div className="post">

            <div className="post__header">
                <Avatar className={ classes.small}/>
                <div className="post__user-info-container">
                    <div className="post__user-info">
                        <p>Gabriel Luis</p>
                        <span>Hace un momento <PublicIcon color="inherit"/></span>
                    </div>
                    <div  className="post__more">
                        <MoreHorizIcon fontSize="inherit"/>
                    </div>
                </div>
            </div>

            <div className="post__message">                
                <p> Este es un mensaje de prueba </p>
            </div>

            <div className="post__image">
                <img src="./assets/messageImg.jpg" alt="message"/>
            </div>

            <div className="post__footer">
                <div className="post__options">
                    <div className="post__option">                        
                        <ThumbUpAltOutlinedIcon fontSize="inherit"/>
                        <p>Me gusta</p>
                    </div>

                    <div className="post__option">
                        <ChatBubbleOutlineRoundedIcon fontSize="inherit"/>
                        <p>Comentar</p>
                    </div>

                    <div className="post__option">
                        <ForwardOutlinedIcon fontSize="inherit"/>
                        <p>Compartir</p>
                    </div>
                </div>

                <div className="post__comment">
                    <Avatar 
                        className={ classes.small}
                    />
                    <div className="post__input-box-comment">
                        <input placeholder="Escribe un comentario" />
                    </div>
                </div>

            </div>

            {/* <ModalEditPost /> */}
        </div>
    )
}

export default Post
