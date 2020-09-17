import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='Card'>
            <button
                type='button'
                /* ask dan what is this function saying */
                onClick = {() => props.onClickDelete(props.id)}
            >
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}
// ask dan wtf is happening here
//Card.propTypes = {
  //  onClickDelete: () => {}
//}