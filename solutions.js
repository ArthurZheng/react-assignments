const { createContext, useContext } = React;
const NameContext = createContext();
function Layer({ children, name }) {
  const parentName = useContext(NameContext) || "";
  const childName = `${parentName}/${name}`;
  return (
    <NameContext.Provider value={childName}>
      <ul>
        <li>{childName}</li>
        {children}
      </ul>
    </NameContext.Provider>
  );
}
function Demo() {
  return (
    <Layer name="root">
      <Layer name="a">
        <Layer name="a1" />
        <Layer name="a2" />
      </Layer>
      <Layer name="b">
        <Layer name="b1" />
        <Layer name="b2" />
      </Layer>
    </Layer>
  );
}
ReactDOM.render(<Demo />, document.getElementById("app"));
