var React = require("react");
var ReactDOM = require('react-dom');


/*
 App
*/

var App = React.createClass({

	render: function(){
		return(
			<div className="catch-of-the-day">
				<div className="menu">
				<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory />
			</div>
			)
	}
});

/* 
	Header
	<Header/>
*/

var Header = React.createClass({
	render: function(){
		console.log(this);
		console.log(this.props);
		return(
			<header className="top">
			<h1>Catch
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
			Day</h1>
			<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
		)
	}
})

/* 
	Order
	<Order/>
*/

var Order = React.createClass({
	render: function(){
		return(
			<p>Order</p>
		)
	}
})

/* 
	Inventory
	<Inventory/>
*/

var Inventory = React.createClass({
	render: function(){
		return(
			<p>Inventory</p>
		)
	}
})

/* Store Picker Component*/ 
/* This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

	render: function() {

		var name = "wes";

		return (
			<form className="store-selector">

				<h2>Please Enter a Store {name}</h2>
				<input type="text" ref="storeId" required/>
				<input type="Submit"/>
			</form>
		)
	}

});

/* 1. use component name, and 2. where it is going to go */
ReactDOM.render(<App/>, document.querySelector('#main'));