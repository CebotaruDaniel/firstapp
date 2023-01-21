import React from "react";


function Heading(){
	const fname = "Danila";
	const sname = "Cebotaru";
	const year = new Date().getFullYear();
	const imgg = "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg"
	
	return(
		<div className='container'>
		<p>Created by {fname + " " + sname} </p>
		<p>Copyright {year}</p>
		<div>
			<img className='sizeimg' src={imgg}></img>
			<img className='sizeimg' src='https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg'></img>
		</div>
	</div>
	)
}

export default Heading