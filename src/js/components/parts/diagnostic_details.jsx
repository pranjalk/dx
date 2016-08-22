import React from 'react';
import ReactDOM from 'react-dom';

class DXDetails extends React.Component {
   render() {
      return (
        <div>
          <div id="diagCenterName">{this.props.contentProp.dxCenterName}</div>
          <hr id="middleline"></hr>
          <div id="diagCenterAddress">{this.props.contentProp.dxCenterAddress}</div>
          <hr id="middleline"></hr>
          <div id="diagCenterDesc">{this.props.contentProp.dxCenterDesc}</div>
          <hr id="middleline"></hr>
          <div id="options">
            <table>
               <tbody>
                  {this.props.contentProp.data.map((testData, i) => <TableRow key = {i} data = {testData} />)}
               </tbody>
            </table>
          </div>
        </div>  
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr id="">
            <td>{this.props.data.name}</td>
            <td>{this.props.data.price}</td>
            <button id="{this.props.data.id}">ADD TO CART</button>
         </tr>
      );
   }
}

export default DXDetails;

