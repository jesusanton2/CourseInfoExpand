const Header = (props) => {
  console.log(props)
   return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = ({name,exercises}) =>{
  
  return(
    <p>{name} {exercises}</p>
  )
}
const Content = ({parts}) =>{
  return(
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (tot) =>{
  return(
    <div>
     <p>Number of exercises {tot.exercises1 + tot.exercises2 +tot.exercises3}</p>
    </div>
  )

}


const App = () => {
  const course = 'Half Stack application development'
 
  const parts = [
    {
    name: 'Funamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course = {course} />
      <Content  parts = {parts}/>
      <Total parts = {parts} />

    </div>
  )
}

export default App