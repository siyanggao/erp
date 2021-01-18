import { observable } from 'mobx'

class Store {
    @observable test = 0;
}

const stores = new Store()

export default stores