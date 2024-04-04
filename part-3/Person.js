const Max = 18
const Person = (props) => {
    const vote = props.age > 18 ? 'please go vote' : 'you must be 18'
    const hobbyLi = props.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0, Max)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {hobbyLi}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )

}