import logo from "./logo.svg";
import "./App.css";

function App() {
	function showStripe() {
		fetch("http://localhost:1337/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				items: [
					{ id: 1, quantity: 3 },
					{ id: 2, quantity: 1 },
				],
			}),
		})
			.then((res) => {
				if (res.ok) return res.json();
				return res.json().then((json) => Promise.reject(json));
			})
			.then(({ url }) => {
				window.location = url;
			})
			.catch((e) => {
				console.error(e.error);
			});
	}
	return (
		<div className="App">
			<button onClick={showStripe}>Checkout</button>
		</div>
	);
}

export default App;
