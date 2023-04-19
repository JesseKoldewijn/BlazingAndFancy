import "./styles/tailwind.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./config/routes";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
	<React.StrictMode>
		<AppRoutes />
	</React.StrictMode>
);
