import React from "react";
import ReactDOM from "react-dom";
import UrunTanimlari from "./UrunTanimlari";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<UrunTanimlari />, div);
	ReactDOM.unmountComponentAtNode(div);
});
