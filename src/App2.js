import React, { Component } from 'react';

class App extends Component{
  
  render() {
   
    return (
      <table>
        <tr>
          <Column />
        </tr>
      </table>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Data satu</td>
        <td>Data dua</td>
        <td>Data tiga</td>
      </React.Fragment>
    )
  }
}

export default App;
