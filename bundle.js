const LayerContext = React.createContext();
class Layer extends React.Component {
  static contextType = LayerContext;
  render() {
    return (
      <ul>
        <li>{this.context.name}</li>
        {this.context.children}
      </ul>
    );
  }
}
const HocContext = props => (
  <LayerContext.Provider
    value={{
      name: props.name,
      children: props.children
    }}
  >
    <Layer />
  </LayerContext.Provider>
);
function App() {
  return (
    <div className="App">
      <HocContext name="root">
        <HocContext name="a">
          <HocContext name="a1" />
          <HocContext name="a2" />
        </HocContext>
        <HocContext name="b">
          <HocContext name="b1" />
          <HocContext name="b2" />
        </HocContext>
      </HocContext>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
