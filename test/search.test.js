const { JSDOM } = require('jsdom');
const { expect } = require('chai');

// Require the JavaScript file that contains myFunction
const jsdom = new JSDOM(`<!DOCTYPE html>
  <html>
    <body>
      <input id="myInput" type="text">
      <table id="myTable">
        <tr>
          <td>Mugaredwin</td>
          <td>CalvinJr</td>
        </tr>
      </table>
    </body>
  </html>
`);
global.document = jsdom.window.document;
global.myFunction = require('../public/search'); // Replace with the actual path to your JavaScript file

describe('myFunction Search Test', function() {
  it('should filter and display table rows based on search input', function() {
    // Call the myFunction function
    myFunction();

    const tableRows = document.getElementById('myTable').getElementsByTagName('tr');
    console.log('Number of rows:', tableRows.length);
    
    if (tableRows[0]) {
      console.log('Row 0 style:', tableRows[0].style);
    } else {
      console.log('Row 0 not found');
    }
  });
});