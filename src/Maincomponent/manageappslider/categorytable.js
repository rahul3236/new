import React, { Component } from 'react'
import { Dropdown,Image, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Grid.Column width={16} style={{marginRight:"1%"}}>
    <Header as={"h2"}>Manage App Slider</Header>
    <hr />
  <Header><Button floated="right" onClick={()=>this.props.addslider()}>Add slider</Button></Header>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.slider_name}</Table.Cell>
              
              <Table.Cell><Image size="small"  src={item.slider_image} /></Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.slider_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.slider_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }
      

    </Table.Body>
    </Table>
    </Grid.Column>

    
        <Pagination style={{marginRight:"1%"}} floated="right" defaultActivePage={this.props.activePage} totalPages={5} onPageChange={this.props.handlePaginationChange} />
        </div>
 

   )
  }
  else {
    return null
  }
}
}
