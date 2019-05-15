import React, { Fragment } from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({
    loop,
    autoplay,
    lottie,
    setRef,
    height,
    width,
    stopped,
    paused,
    eventListeners,
    onClick
}) => {
    let defaultOptions = {
        loop: loop ? loop : false,
        autoplay: autoplay ? autoplay : false,
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <Fragment>
            <Lottie
                onClick={onClick}
                options={defaultOptions}
                height={height ? height : 400}
                width={width ? width : 400}
                isStopped={stopped ? stopped : false}
                isPaused={paused ? paused : false}
                eventListeners={
                    [
                        {
                            eventName: 'enterFrame',
                            callback: obj => eventListeners(obj),
                        },
                    ]
                }
            />
        </Fragment>
    )
}

export default LottieAnimation;
