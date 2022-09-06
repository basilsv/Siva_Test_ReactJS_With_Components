import React from 'react';
import {Button} from './ButtonComponents';


export const ResultsRow = ({styles_result,handleDelete}) => {
    return (
        <div className="three-grid-row">
  <div className="three-grid-column">
  <p style={{textAlign:"left",paddingLeft:"1em",margin:"1em 1em 1em 0"}}>{styles_result.id}</p>
  </div>
  <div className="three-grid-column">
  <p style={{textAlign:"right",margin:"1em 0 1em 1em"}}>{styles_result.email}</p>
  </div>
  <div className="three-grid-column">
  <Button primary onClick={() => handleDelete(styles_result.id)}>Delete</Button>
  </div>
  </div>
    )

};

export const EmptyRow = () => {
    return (
        <div className="three-grid-row">
        <div className="three-grid-column">
        <p style={{textAlign:"left",paddingLeft:"1.25em",color:"var(--grey-color-primary)",margin:"1em 1em 1em 0"}}>No Results</p>
        </div>
        <div className="three-grid-column">
        <p style={{textAlign:"right",color:"var(--grey-color-primary)",margin:"1em 0 1em 1em"}}>No Results</p>
        </div>
        <div className="three-grid-column">
        <p style={{textAlign:"center",color:"var(--grey-color-primary)",margin:"1em 0 1em 1em"}}>No Action</p>
        </div>
        </div> 
    )
};

export const HeaderRow = () => {
    return (
    <div className="three-grid-row border-bottom-grid">
  <div className="three-grid-column">
    <p style={{color:"var(--purple-color-primary)",textAlign:"left",paddingLeft:"1em"}}>Patient ID</p>
  </div>
  <div className="three-grid-column">
  <p style={{color:"var(--purple-color-primary)",textAlign:"right"}}>Patient Email</p>
  </div>
  <div className="three-grid-column">
  <p style={{color:"var(--red-color)"}}>Delete</p>
  </div>
  </div>
  )
};