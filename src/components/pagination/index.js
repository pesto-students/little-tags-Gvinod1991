import React from 'react';
import './pagination.scss';
export default function Pagination(){
  return(
    <div className="center">
      <div className="pagination center">
        <a href="#/">&laquo;Previous</a>
        <a href="#/">1</a>
        <a href="#/" className="active">2</a>
        <a href="#/">3</a>
        <a href="#/">4</a>
        <a href="#/">5</a>
        <a href="#/">6</a>
        <a href="#/">Next &raquo;</a>
      </div>
    </div>
  )
}