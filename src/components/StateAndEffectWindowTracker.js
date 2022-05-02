import React from "react"

export default function StateAndEffectWindowTracker() {

    const [windowWidth, setWindowsWidth] = React.useState(window.innerWidth)
    React.useEffect( () => {
        function watchWidth() {
            console.log("set up")
            setWindowsWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth )
        return function() { // clean up function
            console.log("take down")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}