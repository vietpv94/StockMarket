var socket = io();
var CLIENT_VALUE_UPDATE_EVENT = 'client on update value event';
var SERVER_VALUE_UPDATE_EVENT = 'server on update value event';
var CLIENT_VOLUME_UPDATE_EVENT = 'client on update volume event';
var SERVER_VOLUME_UPDATE_EVENT = 'server on update volume event';
var SERVER_INIT_DATA = 'server initial data';

var TableHeader = React.createClass({
  render: function () {
    return(
      <div>
        <table className="full-width">
          <tbody>
            <tr  className="flex-space-between table-header">
              <td>Code</td>
              <td>Company</td>
              <td>Price</td>
              <td>Value</td>
              <td>Change</td>
              <td>%Change</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

var StockIndexItem = React.createClass({
  getInitialState() {
    return { stockInfo: '' }
  },
  render: function () {
    return(
      <div>
        <table className="full-width">
          <tbody>
            <tr  className="flex-space-between table-header">
              <td className="code-index">{this.props.code}</td>
              <td>{this.props.name}</td>
              <td>{this.props.price}</td>
              <td>{this.props.volume * this.props.price}</td>
              <td>Change</td>
              <td>%Change</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

var TableIndex = React.createClass({
  _onUpdateData: function(data) {
    this.setState({serverData: data});
  },
  getInitialState() {
    return { serverData: [] };
  },
  render: function () {
    return(
      <div>
        {
          this.state.serverData.map(function (item) {
            return(
              <StockIndexItem code={item.code} volume={item.volume} price={item.price} name={item.name}/>
            );
          })
        }
      </div>);
    }
})

var tableheader = ReactDOM.render(
  <TableHeader />
, document.getElementById('root'));

var tableindex = ReactDOM.render(
  <TableIndex/>
, document.getElementById('root_index'));

socket.on(SERVER_INIT_DATA, function(data) {console.log(data);
  tableindex._onUpdateData(data);
});
