const App = () =>(
    <div>
        <First />
        <Name name='Gurnoor' />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
// createRoot(document.getElementById('root')).render(<App />)