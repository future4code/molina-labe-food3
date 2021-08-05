import Button from "@material-ui/core/Button";
import {styled} from '@material-ui/core/styles'

const MyButton = styled(Button)({
    width: '90px',
    height: '32px',
    borderRadius: '0',
    borderBottomRightRadius: '8px',
    borderTopLeftRadius: '8px',
    fontSize: '12px',
    padding: '0.5rem 1.281rem 0.563rem 1.344rem',
    textTransform: 'lowercase',
    color: (props=>props.add? '#E8222E': '#000000'),
    border: (props=>props.add? '1px solid #E8222E':'1px solid #000000'),
    
  })

  export default MyButton