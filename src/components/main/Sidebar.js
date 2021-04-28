import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Sidelink from './Sidelink';


const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4.2),
        height: theme.spacing(4.2),
      }
}))

const Sidebar = () => {

    const classes = useStyles();

    return (
        <div className="sidebar ">

            <div className="sidebar__link">
                <div className="sidebar__user-info">
                    <Avatar className={ classes.small}/>
                    <p>Gabriel Luis</p>
                </div>
            </div>

            <div className="sidebar__link">
                <Sidelink 
                    imageRoute='./assets/squBo4GNUfh.png'
                    text="COVID-19: Centro de información"
                 />
            </div>

            <div className="sidebar__link">
                <Sidelink 
                    imageRoute='./assets/-XF4FQcre_i.png'
                    text="Amigos"
                 />
            </div>

            <div className="sidebar__link">
                <Sidelink 
                    imageRoute='./assets/GA7Y4WRJMp8.png'
                    text="Recuerdos"
                 />
            </div>

            <div className="sidebar__link">
                <Sidelink 
                    imageRoute='./assets/9BDqQflVfXI.png'
                    text="Marketplace"
                 />
            </div>

            <div className="sidebar__link">
                <Sidelink 
                    imageRoute='./assets/mk4dH3FK0jT.png'
                    text="Grupos"
                 />
            </div>

            <div className="sidebar__link">
                <Sidelink 
                    imageRoute='./assets/A1HlI2LVo58.png'
                    text="Watch"
                 />
            </div>
            
        </div>
    )
}

export default Sidebar
