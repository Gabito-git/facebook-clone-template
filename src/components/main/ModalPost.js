import { Avatar } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PublicIcon from '@material-ui/icons/Public';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


const ModalPost = () => {


    return (
        <div className="modalPost">
                <div className="modalPost__box">

                    <form>
                        <div className="modalPost__header">
                            <div className="modalPost__title">
                                <h3>Crear publicación</h3>
                            </div>
                            <div 
                                className="modalPost__closeIcon"
                            >
                                <ClearIcon color="inherit" fontSize="inherit" />
                            </div>
                        </div>
                        
                        <div className="modalPost__user-info">
                            <Avatar /> 
                            <div className="modalPost__user-name">
                                <h4>Gabriel</h4>
                                <span>
                                    <div className="modalPost__public">
                                        <PublicIcon fontSize="inherit"/>
                                    </div>
                                    <p>Público</p>
                                </span>
                            </div>
                        </div>
                        
                        <textarea
                            placeholder="¿Qué estás pensando, Gabriel?"
                            className="modalPost__body"                  
                        >
                        </textarea>

                  
                            {/* <div className="modalPost__image">
                                <img src='' alt="user-upload"/>
                            </div>
                */}

                        <div className="modalPost__add-image mt-2">
                            <p>Agregar a tu publicación</p>
                            <div 
                                className="modalPost__img-icon"
                            >
                                <PhotoLibraryIcon color="inherit" fontSize="inherit" /> 
                            </div>
                            <input
                                id="inputImage" 
                                type="file"
                                className="hidden"
                            />
                        </div>

                        <button 
                            className="btn btn--primary block mt-2"
                        >
                            Publicar
                        </button>

                    </form>


                </div>
        </div> 
    )
}

export default ModalPost