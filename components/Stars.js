import { forwardRef, useEffect, useState } from "react";
import Fade from "./Fade";

const Stars = (props, ref) => {
    const { banner, setBanner } = props;

    return (
        <div className="stars">
          <Fade enter={!!(banner === "stars")}>
            <svg viewBox="0 0 662 550" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:"absolute"}}>
                <line x1="447.246" y1="32.5645" x2="493.831" y2="58.8509" stroke="black"/>
                <line x1="372.553" y1="150.776" x2="429.553" y2="36.7764" stroke="black"/>
                <line x1="373.504" y1="240.062" x2="365.504" y2="176.062" stroke="black"/>
                <line x1="535.883" y1="290.486" x2="390.883" y2="255.486" stroke="black"/>
                <line x1="361.174" y1="256.469" x2="100.174" y2="353.469" stroke="black"/>
                <line x1="240.159" y1="460.474" x2="28.1588" y2="531.474" stroke="black"/>
                <line x1="80.4632" y1="370.188" x2="17.4632" y2="525.188" stroke="black"/>
                <line x1="628.558" y1="432.233" x2="560.558" y2="303.233" stroke="black"/>
                <line x1="620.011" y1="445.5" x2="264.011" y2="453.5" stroke="black"/>
                <text transform="translate(502.039 44) rotate(20.0008)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(341 155.11) rotate(-44.8398)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(362 234.459) rotate(-5.93214)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(547.768 267) rotate(21.6816)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(264.077 439) rotate(56.4689)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(2.40536 517.626) rotate(2.85713)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(69 353.023) rotate(-37.0701)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
                <text transform="translate(419.183 7.64737) rotate(-17.073)" fill="black"><tspan x="0" y="55.3008">*</tspan></text>
            </svg>
          </Fade>
            <svg viewBox="0 0 662 550" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:"absolute"}}>
                <text transform="translate(645.598 426) rotate(58.5057)" fill="black" 
                    ref={ref}
                    onClick={() => !!(banner === "stars") ? setBanner(null) : setBanner("stars")}>
                    <tspan x="0" y="55.3008">
                        *
                    </tspan>
                </text>
            </svg>
        <style jsx>{`
           .stars {
            position: absolute;
            width: 100%;
            top: -13rem;
            left: -18rem;
            transform: rotate(-5deg);
           }
      `}</style>
        </div>
        
    );
};

export default forwardRef(Stars);

