import { observable, action} from "mobx";
import Home from '../components/home/home'
import Menu from '../components/home/menu'

class TabStore {
    @observable data = [
        { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1', closable: false, Component: Home, display: true },
        { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2', closable: false, Component: Menu, display: false },
    ]
  @observable test = 3333;
  @action add () {
      this.test += 1;
  }
}
export default TabStore;