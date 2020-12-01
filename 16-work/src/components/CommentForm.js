import React from 'react';
import { connect } from "react-redux";
import { createComment, showAlert } from "../redux/actions"
import { Alert } from './Alert';

function storageAvailable(type) {
   try {
      let storage = window[type];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
   }
   catch (e) {
      return false;
   }
}

class CommentForm extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         author: "",
         text: "",
         dtData: new Date().toLocaleString()
      }
   }

   onSubmit = event => {
      event.preventDefault();

      const { author, text, dtData } = this.state
      if (!author.trim() || !text.trim()) {
         return this.props.showAlert("Поля должны быть заполнены данными")
      }

      const newComment = {
         author,
         text,
         id: Date.now().toString(),
         dtData
      }

      this.props.createComment(newComment)
      this.setState({ author: '', text: '' });

   }


   changeInputHandler = event => {
      event.persist()
      this.setState(prev => ({
         ...prev, ...{
            [event.target.name]: event.target.value
         }
      }))
   }

   render() {
      return (
         <form onSubmit={this.onSubmit}>
            {this.props.alert && <Alert text={this.props.alert} />}
            <div className="form-group">
               <input
                  type='text'
                  placeholder='Ваше имя'
                  value={this.state.author}
                  className="form-control mb-3"
                  id="author"
                  name="author"
                  onChange={this.changeInputHandler}
               />
               <textarea
                  type='text'
                  placeholder='Введите комментарий'
                  value={this.state.text}
                  rows="4"
                  className="form-control mb-3"
                  id="text"
                  name="text"
                  onChange={this.changeInputHandler}
               />
               <button
                  type='submit'
                  value='Сохранить'
                  className="btn btn-primary"
               >Сохранить</button></div>
         </form>
      )
   }
}

const mapDispatchToProps = {
   createComment, showAlert
}

const mapStateToProps = state => ({
   alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)