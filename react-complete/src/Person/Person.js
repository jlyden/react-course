const Person = (props) => {
  return (
    <div>
      <p>I'm {props.name}, and I've worked at Schoology for {props.sgyAge} years.</p>
    </div>
  )
}

export default Person;