import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";


function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <CommentForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Комментарии</h2>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
