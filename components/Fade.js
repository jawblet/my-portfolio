import { CSSTransition } from "react-transition-group";

const Fade = ({ enter, children }) => {
    return (
        <CSSTransition 
            unmountOnExit
            in={enter}
            timeout={300}
            classNames="fade"> 
            {children}
        </CSSTransition>
    );
};

export default Fade;