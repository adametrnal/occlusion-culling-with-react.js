 /** @jsx React.DOM */

var App = React.createClass({
  
  render: function(){
    return(
      <div className="container">
        <div className="row">
          <h1>Bill Murray Simulator</h1>
        </div>
        <div className="row box">
          <div className="col-xs-4">
            <label htmlFor="numberOfMurrays">Number of Bill Murrays</label>
            <input id="numberOfMurrays" type="number" className="form-control"
                   value="10" />
          </div>
          <div className="col-xs-2">
            <label htmlFor="murrayWidthInput">Width</label>
            <input id="murrayWidthInput" type="number" className="form-control"
                   value="150" onChange={this.updateMurrayWidth}/>
          </div>
          <div className="col-xs-2">
            <label htmlFor="murrayHeightInput">Height</label>
            <input id="murrayHeightInput" type="number" className="form-control"
                   value="150" onChange={this.updateMurrayHeight}/>
          </div>
        </div>
      </div>
    )
  }
});

React.renderComponent(
  <App/>,
  document.body
);
