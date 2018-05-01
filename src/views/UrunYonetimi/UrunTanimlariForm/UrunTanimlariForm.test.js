import React from "react";
import ReactDOM from "react-dom";
import UrunTanimlari from "./UrunTanimlariForm";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<UrunTanimlariForm />, div);
	ReactDOM.unmountComponentAtNode(div);
});
