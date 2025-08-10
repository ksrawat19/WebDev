import React from 'react'

const ProfileCard = () => {

    const inlineCssObj = {
        color: "darkBlue",
        backgroundColor: "lightBlue",
        padding: "20px",
        marginTop: "10px",
        borderRadius: "10px"
    }

    return (
        <div style={inlineCssObj}>
            <h1>Again Style React</h1>
            <p>Using inline css but via object of css properties</p>
        </div>
    )
}

export default ProfileCard