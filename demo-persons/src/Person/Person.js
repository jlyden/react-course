import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}, and I've worked at Schoology for {props.sgyAge} years.</p>
    </div>
  )
}

export default Person;