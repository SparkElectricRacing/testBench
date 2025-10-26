import Image from "next/image";
import Reader from "../src/components/reader.tsx"

export default function Page() {
  const getReaders = () => {
    // TODO: Read arr from somewhere
    const arr = []

    for (let i = 0; i < 5; ++i) {
      arr.push(<Reader head={i} value={i}/>)
    }

    return arr;
  }
  return (
    <>
      <head>
        <title>CAN Testbench</title>
      </head>
      <body>
        <section id="grid">{getReaders()}</section>
      </body>
    </>
  );
}
