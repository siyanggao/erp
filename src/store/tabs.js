import { observable, action} from "mobx";

class TabStore {
    @observable data = [
        { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1', closable: false },
        { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2', closable: false },
    ]
  @observable test = 3333;
  @action add () {
      this.test += 1;
  }
}
export default TabStore;