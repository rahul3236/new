import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import Tablec from './discounttable'


export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
          data:false,
          response:false,
          activePage:1,
          modalOpen:false,
          idtoedit:""
      }
  }

  handlePaginationChange = (event, { activePage} ) => {
    fetch('http://localhost:5000/discountcoupon/'+activePage)
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
        fetch('http://localhost:5000/discountcoupon/')
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        this.setState({data:true, response:responseJson})
    })
    .catch((error) => {
      console.error(error);
    });



  }
  editwithserver = (value) => {
      alert(value)
  }

  handleEdit = (id) => {
      alert("inside edit")
      this.setState({modalOpen:true, idtoedit:id})
  }
  handleDelete = (id) => {
      let res=[]
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
          if (element.location_id != id) {
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
         data={this.state.response} edit={(id)=> this.handleEdit(id)}
            delete={(id)=>this.handleDelete(id)} /> : "waiting"}
    </div>
    )
}
}
