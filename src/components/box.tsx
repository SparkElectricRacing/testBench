export default function Box({header, children}:{header:any, children: any}) {
  return (
    <div className="reader floatbox">
      <h1>{header}</h1>
      <div>
        {children}
      </div>
    </div>
  );
}
