import Vue from 'vue'
import {
    Button,
    Select,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    RadioGroup,
    RadioButton,
    Card,
    Row,
    Col,
    Tooltip,
    Carousel,
    CarouselItem,
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Tooltip)
Vue.use(Carousel)
Vue.use(CarouselItem)

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);