import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            categoryName:"",
            categoryBanner:""
        }
    }

handleFile = (file) => {
  this.setState({categoryBanner:file})
}

    render() {
       return (
           <Modal show={this.state.show} onHide={() => this.props.hideditmodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Edit Category</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Input label="Name"  placeholder='Category name'
                    onChange={(event)=>this.setState({categoryName:event.target.value})}
                />

            
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" label="Image" placeholder='Slider Image'
                    />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hideditmodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.editcategoryserver(this.state.categoryName, this.uploadInput)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
