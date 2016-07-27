
import {BarChart} from 'react-easy-chart';
import {  } from 'react-bootstrap';
import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Data extends Component {
render() {
  return (
    <div className='Data'>

       <BarChart
         axes
         colorBars
         margin={{top: 0, right: 0, bottom: 30, left: 100}}
         height={650}
         width={650}
         data={[ {x: 'A', y: 20, color: '#502c5f '},
                 {x: 'B', y: 30, color: '#0076a3 '},
                 {x: 'C', y: 40, color: '#7ac5cd '},
                 {x: 'D', y: 20, color: '#f08080 '},
                 {x: 'E', y: 5, color: '#315198 '}
               ]}
       />


    </div>
  )
}
}

// render(<DataDisplay />, document.getElementById('main-container'));
