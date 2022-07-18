import { SwitchTransition, CSSTransition } from "react-transition-group";

const SwitchFade = (props) => {
    return(
        <SwitchTransition>
            <CSSTransition key={props.switch} 
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                  classNames="fade">
                        {props.children}
                </CSSTransition>
            </SwitchTransition>
    )
}

export default SwitchFade;