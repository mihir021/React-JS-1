import img1 from './assets/hero.png'

// write a react code to render a componet with the following data 
// 1> a heading in italic , blue colour and font size 25px
// 2> lode one img 
// 3> oderneed list of 3 frutes that st with the letter A then B then C 
// 4> the current time and current date in red color and central alined 

function Task2() {
  return (
    <>
      <h2 style={{ fontStyle: 'italic', color: 'blue', fontSize: '25px' }}>
        This is a heading
       </h2>
      <img src={img1} alt="Description of image" />

      <ol type='A'>
        <li>Apple</li>
        <li>Avocado</li>
        <li>Apricot</li>
      </ol>
        <p style={{ color: 'red', textAlign: 'center' }}>
            Current Date and Time: {new Date().toLocaleString()}
            {/* const date = new Date().toLocaleDateString(); */}
            {/* const time = new Date().toLocaleTimeString(); */}
        </p>
    </>
  )
}

export default Task2