import "../../style/ReadArticle/SharePopup.css";

function SharePopup({showPopup}) {
  return (
    <div className="SharePopup">
      <h2>Share with your friends?</h2>
      <button>Share!</button>
      <p style={{color: "red"}}>By clicking share, you will post to all of your linked social media accounts.</p>
      <button onClick={() => showPopup(false)}>Unsure? Cancel here.</button>
    </div>
  );
}

export default SharePopup;