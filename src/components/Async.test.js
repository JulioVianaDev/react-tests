import { render ,screen} from "@testing-library/react"
import Async from "./Async"

describe('async component',()=>{
  test('render post if success',async ()=>{
    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
      json: async()=>[{id: 1,title: 'um'}]
    })
    render(<Async/>)

    const listElements= await screen.findAllByRole('listitem');
    expect(listElements).not.toHaveLength(0); 
  })
})