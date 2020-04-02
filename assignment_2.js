const { createContext, useContext } = React;
const EmailTypeContext = React.createContext();

const H1 = (props) => {
  const emailType = useContext(EmailTypeContext);
  let H1Result = '';

  if (emailType.type === 'html') {
    H1Result = <h1>{props.children}</h1>
  }
  if (emailType.type === 'markDown') {
    H1Result = <code><pre>{props.children}</pre></code>
  }  
  return ( H1Result );

}

const P = (props) => {
  const emailType = useContext(EmailTypeContext);
  let PResult = '';

  if (emailType.type === 'html') {
    PResult = <p>{props.children}</p>
  }
  if (emailType.type === 'markDown') {
    PResult = <code><pre>{props.children}</pre></code>
  }  
  return ( PResult );

}

const Email = (props) => (
  <EmailTypeContext.Provider value={{type:props.type}}>
    {props.children}
  </EmailTypeContext.Provider>
)

function WelcomeEmail ({ type }) {
  return (
    <Email type={type}>
      <H1>Hello</H1>
      <P>Welcome to my site</P>
    </Email>
  )
}

function GoodByeEmail ({ type }) {
  return (
    <Email type={type}>
      <H1>Goodbye</H1>
      <P>Sad to see you go</P>
      <P>We'll miss you</P>
    </Email>
  )
}

function App() {
  return (
    <div className="App">
      <WelcomeEmail type="html" />
      <hr />
      <GoodByeEmail type="markDown" />
      <hr />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
