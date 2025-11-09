import Box from "./box"

export default function Reader({ head, value }: { head: any, value: any }) {
	const inp = document.querySelector(`#${CSS.escape(head)}`)
	const bob = document.getElementById(`${CSS.escape(head)}`)
	
	inp?.addEventListener("invalid", () => {
		alert(`invalid val for ${head}`);
	})
	return (
		<Box header={head}>
			<input id={head} type="number" min={Number(value["conv min"])} max={Number(value["conv max"])} />
			<p>{value}</p>
		</Box>
	);
}
