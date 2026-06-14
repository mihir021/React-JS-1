// Task 3: 
// write a react code to render a componet with the following data
// 1> a heading(the react projects) in bold uppercase, red colour (user extranal css file for this)
// 2> add one img (rounded circle) 
// 3> unoderlist of 3 skills about employee(fount size 30px)
import img1 from './assets/hero.png'
import './My.css'

function Task3() {
  return (
    <>
    {/* h1 must be in bold uppercase, red colour */}
        <h1 className="heading">The React Projects</h1>
        <img src={img1} className="rounded-circle" />
        <ul style={{ fontSize: '30px' }}>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
        </ul>
    </>
  )
}

export default Task3