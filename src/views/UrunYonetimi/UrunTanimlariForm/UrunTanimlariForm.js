import React, { Component } from "react";
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
	Row
} from "reactstrap";

class UrunTanimlariForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formId: "",
			formName: ""
		};
	}
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col>
						<Form>
							<Card>
								<CardBody>
									<Row>
										<Col sm="6">
											<FormGroup>
												<Label htmlFor="id">Id</Label>
												<Input
													type="text"
													id="id"
													name="formId"
													value={this.state.formId}
													onChange={this.handleChange}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col sm="6">
											<FormGroup>
												<Label htmlFor="name">
													Name
												</Label>
												<Input
													type="text"
													id="name"
													name="formName"
													value={this.state.formName}
													onChange={this.handleChange}
												/>
											</FormGroup>
										</Col>
									</Row>
								</CardBody>
								<CardFooter>
									<Button>Ara</Button>{" "}
									<Button onClick={this.clearSearchForm}>
										Temizle
									</Button>
								</CardFooter>
							</Card>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UrunTanimlariForm;
