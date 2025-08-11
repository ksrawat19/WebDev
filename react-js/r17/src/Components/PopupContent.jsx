import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({copied}) => {

    const h3Style ={
        position: "fixed",
        bottom: "3rem",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#333",
        color: "#fff",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        zIndex: 1000
    }

    return createPortal(
        <section>
            {copied && 
                (<h3 style={h3Style}>
                    Content is copied
                </h3>)
            }
        </section>,
        document.querySelector('#modal-root')
    )
}

export default PopupContent


// 1, basic syntax of portal
// import ReactDOM from 'react-dom';

// ReactDOM.createPortal(
//   <YourComponent />,
//   document.getElementById('some-root')
// );

// 2, Modal comonent
// import ReactDOM from 'react-dom';

// function Modal({ children }) {
//   return ReactDOM.createPortal(
//     <div className="modal">{children}</div>,
//     document.getElementById('modal-root')
//   );
// }