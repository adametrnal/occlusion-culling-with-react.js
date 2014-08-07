 /** @jsx React.DOM */

var App = React.createClass({
  getInitialState: function(){
    return({
      numberOfMurrays: 10,
      murrayWidth:150,
      murrayHeight:100,
      quotes:[{quote:''}]
    })
  },

  componentDidMount: function(){
    this.getQuotesForMurrays();
  },

  updateMurrayWidth: function(e){
    this.setState({murrayWidth: +e.target.value })
  },

  updateMurrayHeight: function(e){
    this.setState({murrayHeight: +e.target.value })
  },

  updateNumberOfMurrays: function(e){
    this.setState({numberOfMurrays: +e.target.value })
  },

  getQuotesForMurrays: function() {
    var that = this;
    $.get('/api/quotes.json')
     .done(function(data){
       that.setState({
         quotes: data
       });
     })
  },

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
                   value={this.state.numberOfMurrays} onChange={this.updateNumberOfMurrays}/>
          </div>
          <div className="col-xs-2">
            <label htmlFor="murrayWidthInput">Width</label>
            <input id="murrayWidthInput" type="number" className="form-control"
                   value={this.state.murrayWidth} onChange={this.updateMurrayWidth}/>
          </div>
          <div className="col-xs-2">
            <label htmlFor="murrayHeightInput">Height</label>
            <input id="murrayHeightInput" type="number" className="form-control"
                   value={this.state.murrayHeight} onChange={this.updateMurrayHeight}/>
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
