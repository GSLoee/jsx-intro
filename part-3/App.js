const App = () =>(
    <div>
        <Person
        name = 'Gurnoor'
        age = '14'
        hobbies = {['ball', 'games']}
        />
        <Person
        name = 'Loee'
        age = '20'
        hobbies = {['ball', 'games']}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))