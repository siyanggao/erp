import { observable, action } from 'mobx'
import Tabs from './tabs'

let tabs = new Tabs()

const stores = {
    tabs
}

export default stores