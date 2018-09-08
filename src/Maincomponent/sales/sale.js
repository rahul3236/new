import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Tablec from './salestable'
import Salemodal from './salemodal'

export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          show:false,
          idtodelivery:""
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://localhost:5000/sales/'+activePage)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson , activePage:activePage})
    })
    .catch((error) => {
      console.error(error);
    });

}
    componentDidMount = () => {
    console.log("COmponent mounting")
        fetch('http://localhost:5000/sales/')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });



  }
 adddeliverywithserver = (deliver,payment,message) => {
    this.setState({show:false})
 }

  handleDelivery = (id) => {
      alert("inside edit")
      this.setState({show:true, idtodelivery:id})
  }
  handleDelete = (id) => {
      let res=[]
      alert(id)
      fetch('http://localhost:5000/sales/deletesales/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locid:id
        }),
      })
      .then((response)=> response.json())
      .then((responseJson) => {
          console.log(responseJson)
      })
      .catch((err)=> console.log(err))
       this.state.response.forEach((element) => {
          if (element.sale_id != id) {
                res.push(element)
          }
      })
    this.setState({response:res})
  }



  render() {

    return (
        <div>
        {this.state.data ? <Tablec activePage = {this.state.activePage}
        handlePaginationChange = {this.handlePaginationChange}
         data={this.state.response} deliverystatus={(id)=> this.handleDelivery(id)}
            delete={(id)=>this.handleDelete(id)} /> : "waiting"}
            {this.state.show?<Salemodal hidemodal={()=>this.setState({show:false})} adddeliveryserver={(deliver,payment,message)=>this.adddeliverywithserver(deliver, payment,message)}/> : null }
    </div>
    )
}
}
