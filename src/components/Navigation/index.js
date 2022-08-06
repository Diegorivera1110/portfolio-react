import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

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

                </ul>
            </nav>
        </header>
    )
}

export default Navigation;