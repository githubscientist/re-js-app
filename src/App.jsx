const App = () => {

  const handleSubscribe = (event) => {
    event.preventDefault();

    // console.log(event.target.email.value);
    const email = document.getElementById('email');

    console.log(email.value);
  }

  return (
    <div>
      <form onSubmit={handleSubscribe}>
        <input type="email" placeholder="Email to subscribe..." name="email" id="email" />
        &nbsp;
        <button name="subscribeButton">Subscribe</button>
      </form>
    </div>
  )
}

export default App;