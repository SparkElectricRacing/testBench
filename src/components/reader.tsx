import Box from "./box.tsx"

export default function Reader({head, value}) {
	return (
		<Box header={head}>
			{value}
		</Box>
			
	);
}
