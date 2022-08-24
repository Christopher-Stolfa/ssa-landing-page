import { useState } from 'react';
const ErrorPage = (props) => {
  const [count, setCount] = useState(15);
  // constructor(){
  //     super()

  //     this.state = {
  //         countDown: 6
  //     }}
  // componentDidMount(){

  //     this.myInterval = setInterval(() =>{
  //         browserhistory.push("/time-up")componentDidUpdate(){
  //     if(this.state.countDown === 0){
  //       browserHistory.push("/time-up");
  // }
  // }
  return (
    <>
      <div>
        <h1>Oh no, something has gone wrong.</h1>
        <p>You can try to reloading the page, but if the problem persists, please contact a website administrator</p>
      </div>

      <div>
        <p>Redirecting you to the Welcome Page in {count}</p>
      </div>
    </>
  );
};

export default ErrorPage;
