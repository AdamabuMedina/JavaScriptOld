import React, { Component } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      form: {
        name: "",
        comment: "",
      }
    }
  }

  componentDidMount() {
    if (localStorage.getItem("state")) {
      this.setState({ ...JSON.parse(localStorage.getItem("state")) })
    }
  }

  addComment = () => {
    this.state.form.name = this.state.form.name.replace(/<[^>]+>/g, "")
    this.state.form.comment = this.state.form.comment.replace(/<[^>]+>/g, "")
    if (this.state.form.name.length === 0) {
      alert("Введите имя")
    }
    else if (this.state.form.comment.length === 0) {
      alert("Введите комментарий")
    }
    else {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
            name: this.state.form.name,
            comment: this.state.form.comment,
            date: new Date().toLocaleString()
          }
        ],
        form: {
          name: "",
          comment: ""
        }
      }, () => localStorage.setItem("state", JSON.stringify(this.state)))
    }
  }


  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem("state", JSON.stringify(this.state)))
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="form-group">
        <div className="form-group">
          <label>Имя: <input
            class="form-control"
            id="exampleInputEmail1"
            type="text"
            value={this.state.form.name}
            name="name"
            onChange={this.handleChange} /></label>          <label>Коментарий:<textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="comment"
              value={this.state.form.comment}
              onChange={this.handleChange}></textarea>
          </label>          <button className="btn btn-primary btn-lg" onClick={this.addComment}
          >Добавить комментарий</button>
        </div>
        {this.state.comments.map(comment =>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">{comment.name}</h5>
            </div>
            <div className="card-body" key={comment.id}>
              <h6 className="card-subtitle mb-2 text-muted">
                <strong> {comment.id}.</strong> {comment.date}: </h6>
              <p className="card-text">{comment.comment}</p>
              <button
                className="btn btn-primary"
                onClick={this.removeComment.bind(null, comment.id)}>
                Удалить
              </button>
            </div>
          </div>)}
      </div>
    )
  }
}

export default App