import { render ,screen} from "@testing-library/react"
import Greeting from "./Greeting"
test('testando o greeting',()=>{
  render(<Greeting/>)

  const  batataElement = screen.getByText("Batata")
  expect(batataElement).toBeInTheDocument()

})