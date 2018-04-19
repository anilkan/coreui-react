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
	Row,
	Badge,
	CardHeader,
	Pagination,
	PaginationItem,
	PaginationLink,
	Table
} from "reactstrap";

class UrunTanimlari extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formUsername: "",
			formName: "",
			users: []
		};

		this.clearSearchForm = this.clearSearchForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.loadTable = this.loadTable.bind(this);
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then(response => response.json())
			.then(data => this.setState({ users: data }));
	}

	handleChange({ target }) {
		this.setState({
			[target.name]: target.value
		});
	}

	clearSearchForm(e) {
		this.setState({
			formUsername: "",
			formName: ""
		});
	}

	loadTable(e) {
		e.preventDefault();

		let filter = "";

		if (this.state.formName !== "")
			filter = filter + "&name=" + this.state.formName;

		if (this.state.formUsername !== "")
			filter = filter + "&username=" + this.state.formUsername;

		let filteredURL =
			"https://jsonplaceholder.typicode.com/users" +
			filter.replace("&", "?");

		fetch(filteredURL)
			.then(response => response.json())
			.then(data => this.setState({ users: data }));
	}

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col>
						<Form onSubmit={this.loadTable}>
							<Card>
								<CardBody>
									<Row>
										<Col sm="6">
											<FormGroup>
												<Label htmlFor="username">
													Username
												</Label>
												<Input
													type="text"
													id="username"
													name="formUsername"
													value={
														this.state.formUsername
													}
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
				<Row>
					<Col>
						<Card>
							<CardBody>
								<Table responsive striped>
									<thead>
										<tr>
											<th>Username</th>
											<th>Name</th>
											<th>Email</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{this.state.users.map(user => {
											return (
												<tr>
													<td>{user.username}</td>
													<td>{user.name}</td>
													<td>{user.email}</td>
													<td>
														<Badge color="success">
															Active
														</Badge>
													</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
								<Pagination>
									<PaginationItem disabled>
										<PaginationLink previous href="#">
											Prev
										</PaginationLink>
									</PaginationItem>
									<PaginationItem active>
										<PaginationLink href="#">
											1
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink href="#">
											2
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink href="#">
											3
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink href="#">
											4
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink next href="#">
											Next
										</PaginationLink>
									</PaginationItem>
								</Pagination>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UrunTanimlari;
