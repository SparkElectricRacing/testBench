import Image from "next/image";
import Board from '../src/components/board'

export default function Page() {
  return (
    <>
      <head>
        <title>CAN Testbench</title>
      </head>
      <body>
        <section id="grid">{<Board/>}</section>
      </body>
    </>
  );
}
