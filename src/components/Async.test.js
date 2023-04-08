import { render ,screen} from "@testing-library/react"
import Async from "./Async"

describe('async component',()=>{
  test('render post if success',async ()=>{
    render(<Async/>)

    const listElements= await screen.findAllByRole('listitem');
    expect(listElements).not.toHaveLength(0); 
  })
})