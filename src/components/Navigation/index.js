import React, { useEffect } from "react";
// import { capitalizeFirstLetter } from "../../../utils/helpers";

function Nav() {
    // const {
    //     categories = [],
    //     setCurrentCategory,
    //     contactSelected,
    //     currentCategory,
    //     setContactSelected,
    // } = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

    return(
        <header className="flex-row px-1">
            <h2>
                <a herf="/">
                    <span role="img">

                    </span>
                    Diego Rivera
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${contactSelected && "navActive"}`}>
                        <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navigation;