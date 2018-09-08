import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import { BrowserRouter, Route,Switch,Link } from 'react-router-dom';

import Customer from './Maincomponent/customer/customer'
import Topc from './Component/topcomponent'
import Sidebar from './Component/sidebar'
import Addsale  from './Maincomponent/addsales'
import Sale from './Maincomponent/sales/sale'
import Location from './Maincomponent/location/location'
import Category from './Maincomponent/Products/category/category'
import Subcategory from './Maincomponent/Products/subcategory/subcategory'
import Dashboard from './Maincomponent/dashboard/dashboard'
import Addoffer from './Maincomponent/addoffer/addoffer'
import Discountcoupon from './Maincomponent/discountcoupon/discountcoupon'
import Manageadmin from './Maincomponent/manageadmin/manageadmin'
import Manageappslider from './Maincomponent/manageappslider/manageappslider'
import Userfeedback from './Maincomponent/userfeedback/userfeedback'


export default class App extends Component {

  render() {
    return (
      <Grid stackable>
        <Grid.Column width={16}>
          <Topc />
        </Grid.Column>
          <Grid.Column  width={3} >
            <Sidebar />
        </Grid.Column>
        <Grid.Column width={13}>
      
        
  
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/sales" component={Sale} />
      <Route path="/category" component={Category} />
      <Route path="/subcategory" component={Subcategory} />
      <Route path="/location" component={Location} />
      <Route path="/manageadmin" component={Manageadmin} />
      <Route path="/manageapp" component={Manageappslider} />
      <Route path="/addsale" component={Addsale} />
      <Route path="/addoffer" component={Addoffer} />
      <Route path="/discount" component={Discountcoupon} />
      <Route path="/userfeedback" component={Userfeedback} />
      <Route path="/customer" component={Customer} />
      </Switch>
    </Grid.Column>
</Grid>
    )
  }
}
