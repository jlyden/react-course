const Person = (props) => {
  return (
    <div>
      <p>I'm {props.name}, and I've worked at Schoology for {props.sgyAge} years.</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Person;