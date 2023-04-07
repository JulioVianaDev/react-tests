import { render ,screen} from "@testing-library/react"
import Async from "./Async"

describe('async component',()=>{
  test('render post if success',()=>{
    render(<Async/>)
    const listElements=screen.getAllByRole('listitem');
    expect(listElements).not.toHaveLength(0); 
  })
})