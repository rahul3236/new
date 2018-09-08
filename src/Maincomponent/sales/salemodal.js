import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            message:"",
            paymnetStatus:"",
            deliveryStatus:""
        }
    }



    render() {
       return (
           <Modal show={this.state.show} onHide={() => this.props.hidemodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Delivery Payment</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Select label="Payment Status" options={this.state.products} placeholder='Product' error
                    onChange={(event)=>alert(event.target.value)}
                />

               <Form.Select label="Delivery Status" options={this.state.products} placeholder='Product' error
                    onChange={(event)=>alert(event.target.value)}
                />
                <Form.Input  label="Message" placeholder='Quantity' error
                    onChange={(event)=>this.setState({message:event.target.value})}
                    />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hidemodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.adddeliveryserver(this.state.deliveryStatus,this.state.paymnetStatus, this.state.message)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
