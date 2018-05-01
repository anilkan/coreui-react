import React, { Component } from "react";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
	Pagination,
	PaginationItem,
	PaginationLink,
	Table,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import UrunTanimlariForm from "../UrunTanimlariForm";

class UrunTanimlari extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			formId: "",
			formName: "",
			products: []
		};

		this.clearSearchForm = this.clearSearchForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.loadTable = this.loadTable.bind(this);

		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		//loadTable(null);
		this.loadTable();
	}

	handleChange({ target }) {
		this.setState({
			[target.name]: target.value
		});
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	clearSearchForm(e) {
		this.setState({
			formId: "",
			formName: ""
		});
	}

	loadTable(e) {
		if (e) e.preventDefault();

		let filter = "";

		if (this.state.formId !== "")
			filter = filter + "&id=" + this.state.formId;

		if (this.state.formName !== "")
			filter = filter + "&name=" + this.state.formName;

		// localhost:8080/v0/products
		// https://jsonplaceholder.typicode.com/users
		let filteredURL =
			"http://192.168.1.106:8080/v0/products" + filter.replace("&", "?");

		fetch(filteredURL)
			.then(response => response.json())
			.then(data => this.setState({ products: data }));
	}

	render() {
		return (
			<div className="animated fadeIn">
				<Row />
				<Button color="danger" onClick={this.toggle}>
					{this.props.buttonLabel}
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.loadTable}>
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
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>
							Do Something
						</Button>{" "}
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
				<Row>
					<Col>
						<Form onSubmit={this.loadTable}>
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
				<Row>
					<Col>
						<Card>
							<CardHeader>
								<Button
									size="sm"
									color="success"
									href="#/urun-yonetimi/urun-tanimlari/form"
								>
									<i className="fa fa-dot-circle-o" /> Submit
								</Button>
							</CardHeader>
							<CardBody>
								<Table responsive striped>
									<thead>
										<tr>
											<th>Id</th>
											<th>Name</th>
										</tr>
									</thead>
									<tbody>
										{this.state.products.map(product => {
											return (
												<tr key={product.id}>
													<td>{product.id}</td>
													<td>{product.name}</td>
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
