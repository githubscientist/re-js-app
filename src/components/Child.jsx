// 3. receive the props as an argument in the child component
const Child = (props) => {

    let message = "hello from child!";

    // 4. trigger the function call -- function in the parent component with an argument.
    props.callback(message);

  return (
      <>
        <h1>Child</h1>
      </>
  )
}

export default Child;