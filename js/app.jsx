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

  getRowData: function(){
     var rowData = [];
     var quotes = this.state.quotes;
     for(var i=0; i < this.state.numberOfMurrays; i++){
       rowData.push({quote: quotes[i % quotes.length].quote, key:i});
     }
     return rowData;
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
        <MurrayTable numRows={this.state.numberOfMurrays}
                     murrayWidth={this.state.murrayWidth}
                     murrayHeight={this.state.murrayHeight}
                     rowData={this.getRowData()}/>

      </div>
    )
  }
});

var MurrayTable = React.createClass({

    render: function(){
      var murrayWidth = this.props.murrayWidth,
          murrayHeight = this.props.murrayHeight,
          rowData = this.props.rowData;


      var murrayRows = rowData.map(function(murrayRow){
        return <MurrayRow quote={murrayRow.quote}
                          key={murrayRow.key}
                          murrayWidth={murrayWidth}
                          murrayHeight={murrayHeight}/>;
      });

      return(
        <div className="row table-container" >
          <div className="outer-table" >
            <table className="inner-table table table-bordered table-striped table-condensed">
              <tbody>
                {murrayRows}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
});

var MurrayRow = React.createClass({

  render: function(){
    return(
      <tr key={this.props.key}>
        <td>{this.props.key + 1}</td>
        <td>
          <img src={"http://fillmurray.com/" + this.props.murrayWidth + "/" + this.props.murrayHeight}
               width={this.props.murrayWidth}
               height={this.props.murrayHeight}/>
        </td>
        <td>{this.props.quote}</td>
      </tr>
    )
  }
});

React.renderComponent(
  <App/>,
  document.body
);
