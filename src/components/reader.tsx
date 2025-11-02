import Box from "./box"

export default function Reader({head, value}:{head:any, value:any}) {
	return (
		<Box header={head}>
			{value}
		</Box>
			
	);
}
