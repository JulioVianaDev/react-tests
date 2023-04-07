import { render ,screen} from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe('Greeting component',()=>{
  test('testando o greeting',()=>{
    render(<Greeting/>)

    const  batataElement = screen.getByText("Batata")
    expect(batataElement).toBeInTheDocument()
  })
  test('testando o useState',()=>{
    render(<Greeting/>)

    const  paragraphElement = screen.getByText("texto normal",{exact: false});
    expect(paragraphElement).toBeInTheDocument();
  })
  test('verificando se altera quando o botão é clicado',()=>{
    render(<Greeting/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const outputElement = screen.getByText('texto alterado',{exact: false});
    expect(outputElement).toBeInTheDocument()
  })
  test('checar se não existe na tela o conteudo texto normal',()=>{
    render(<Greeting/>);
    const button = screen.getByRole('button');
    userEvent.click(button);
    const outputElement = screen.queryByText('texto normal',{exact: false});
    expect(outputElement).toBeNull()
  })
})
