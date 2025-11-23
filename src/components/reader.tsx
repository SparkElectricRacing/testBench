

export default function Reader({ head, value }: { head: any, value: any }) {
	const inp = document.querySelector(`#${CSS.escape(head)}`)

	// console.log(document.getElementById(`${CSS.escape(head)}`))


	// 	// bob!.onchange = (event) => {console.log("Wassup");};
	// });
	function checkValid() {
		const bob = document.getElementById(`${CSS.escape(head)}`) as HTMLInputElement;
		bob!.oninvalid = () => { alert("Range is [" + JSON.parse(value)["conv min"] + "," + JSON.parse(value)["conv max"] + "]"); bob.value = bob.min; };
		bob!.checkValidity();
		console.log("inputchecked")

	}

	const valC = JSON.parse(value);

	// console.log(typeof head)
	return (
		<div className="box">
			<h3>{head} <input className="inputs" id={head} type="number" min={Number(valC["conv min"]).toFixed(2)} 
			max={Number(valC["conv max"]).toFixed(2)} onInput={checkValid} step={"0.01"} /> <span>{JSON.parse(value)["units"]}</span></h3>
				
				{/* <p>{value}</p> */}
		</div>
	);
}
