import { RadioButton } from '../components/radio-button.js'
import { CheckBox } from '../components/check-boxes.js'
import { Button } from '../components/button.js'
import { TextBox } from '../components/text-Box.js'

export default function Home() {
  return (
    <div> 
      <h1> Button </h1>
      <Button text='Button' disabled={false}/>
      <Button text='Button' disabled={true}/>

      <h1> CheckBox </h1>
      <CheckBox checked={false} disabled={false} />
      <CheckBox checked={false} disabled={true} />
      <CheckBox checked={true} disabled={false} />
      <CheckBox checked={true} disabled={true} />


      <h1> RadioButton </h1>
      <RadioButton checked={false} disabled={false} />
      <RadioButton checked={false} disabled={true} />
      <RadioButton checked={true} disabled={false} />
      <RadioButton checked={true} disabled={true} />
      
      <h1> TextBox </h1>
      <TextBox checked={false} disabled={false} text='хувер кнопка'></TextBox>
      <TextBox checked={false} disabled={true} text='дизаейбл кнопка'></TextBox>
      <TextBox checked={true} disabled={false} text='чекай кнопка'></TextBox>
      <TextBox checked={true} disabled={true} text='дизейбл/чекай кнопка'></TextBox>

      
      

    </div>
  )
}
