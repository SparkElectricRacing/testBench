import Box from "./box"

export default function Reader({ head, value }: { head: any, value: any }) {
	const inp = document.querySelector(`#${CSS.escape(head)}`)

	// console.log(document.getElementById(`${CSS.escape(head)}`))


	// 	// bob!.onchange = (event) => {console.log("Wassup");};
	// });
	function checkValid() {
		const bob = document.getElementById(`${CSS.escape(head)}`) as HTMLInputElement;
		bob!.oninvalid = () => {alert("INVALID INPUT"); bob.value = bob.min;};
		bob!.checkValidity();
		
	}

	const valC = JSON.parse(value);

	// console.log(typeof head)
	return (
		<Box header={head}>
			<input id={head} type="number" min={Number(valC["conv min"]).toFixed(2)} max={Number(valC["conv max"]).toFixed(2)} onInput={checkValid} />
			<p>{value}</p>
		</Box>
	);
}
