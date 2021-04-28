import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const ModalEditPost = () => {

    return (
        <div className="edit">
            <div 
                className="edit__top"
            >
                <div className="edit__icon">
                    <EditOutlinedIcon fontSize="inherit"/>
                </div>
                <p>Editar publicación</p> 
            </div>

            <div 
                className="edit__bottom"
            >
                <div className="edit__icon"> 
                    <DeleteForeverOutlinedIcon fontSize="inherit"/>
                </div>
                <p>Mover a la papelera</p> 
            </div>
            
        </div>
    )
}

export default ModalEditPost