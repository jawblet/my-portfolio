import { CSSTransition } from "react-transition-group";

const Fade = ({ enter, short, children }) => {
    return (
        <CSSTransition 
            unmountOnExit
            in={enter}
            timeout={short ? 100 : 300}
            classNames="fade"> 
            {children}
        </CSSTransition>
    );
};

export default Fade;