import { Nav, List, ListItem } from './style'
import { AiOutlineGithub } from 'react-icons/ai'
import { HiTranslate } from 'react-icons/hi'

export default function index() {
  return (
    <Nav>
      <List>
        <ListItem><a href="#!"><HiTranslate /><span>Portugues</span></a></ListItem>
        <ListItem><a href="#!"><AiOutlineGithub /></a></ListItem>
      </List>
    </Nav>
  )
}
