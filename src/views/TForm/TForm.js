import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class TForm extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
    		formUsername: '',
    		formName: ''
    	}

    	this.clearSearchForm = this.clearSearchForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
	}

	  handleChange({ target }) {
	    this.setState({
	      [target.name]: target.value
	    });
	  }

	clearSearchForm(e){
		this.setState({
			formUsername: '',
			formName: ''
		});
	}

	render() {
	  	return (
	<div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Username</Label>
                      <Input type="text" id="username" name="formUsername" value={this.state.formUsername}  onChange={this.handleChange}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Name</Label>
                      <Input type="text" id="name" name="formName" value={this.state.formName}  onChange={this.handleChange}/>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
              	<Button>Ara</Button>{' '}
                <Button onClick={this.clearSearchForm}>Temizle</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
    </div>
	  	);
	}
}

export default TForm;
