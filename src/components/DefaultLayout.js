import React from "react";

function DefaultLayout(props) {
    return (
        <div>
            <div className="header bs1">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Car Rental Service</h1>
                </div>
            </div>
            <div className="content">{props.children}</div>
            <footer>
                <p>&copy; 2025 Car Rental Service. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default DefaultLayout;
