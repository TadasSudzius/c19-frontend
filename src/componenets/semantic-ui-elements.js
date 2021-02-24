import React from 'react'
import { Dropdown, Radio} from 'semantic-ui-react'

export const RadioToggle = ((props) => (
  <Radio toggle onChange={props.onChange}/>
))

const DropdownExampleSearchDropdown = React.memo((props) => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={props.data}
    search
    text='Select/Search Country'
    onChange={props.onChange}
  />
))

export default DropdownExampleSearchDropdown
