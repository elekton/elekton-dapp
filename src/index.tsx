import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import App from "./App"
import "./index.css"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
