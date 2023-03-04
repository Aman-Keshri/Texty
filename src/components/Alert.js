import React from 'react'

export default function Alert(props) {
  const caps = (name) => {
    let lower = name.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }  
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{caps(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>     
  )
}
