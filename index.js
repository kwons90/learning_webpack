import React from 'react';
import ReactDOM from 'react-dom';

// class App {
//   render() {
//     return (
//       <h1>
//         You've figured out webpack!
//       </h1>
//     )
//   }
// }

const app = document.getElementById('#app');

ReactDOM.render(
  React.createElement('h1',null,'Hello WOrld'),
  app,
  () => {
    console.log('Congrats!');
  },
);
