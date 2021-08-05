import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.onClick}>I'm {props.name}, and I've worked at Schoology for {props.sgyAge} years.</p>
      <input
        type='text'
        id={props.id}
        value={props.name}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Person;