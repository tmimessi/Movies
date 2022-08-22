import { Search } from './styles'

export function Textarea({value, ...rest}){
  return(
    <Search {...rest}>
      {value}
    </Search>
  )
}