import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../redux/actions';



const Comment = ({ comment }) => {

   return (
      <div className="card-body">
         <h5 className="li">{comment.author}</h5>
         <p className="card-text">{comment.text}</p>
         <p className="card-text">{comment.dtData}</p>
         <button onClick={deleteComment.bind(comment)}
            className="btn btn-outline-dark mt-3">Удалить</button>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteComment: (id) => dispatch(deleteComment(id))
   }
}


export default connect(null, mapDispatchToProps)(Comment)
