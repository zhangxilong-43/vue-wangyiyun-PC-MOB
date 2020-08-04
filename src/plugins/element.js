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
    Tabs,
    TabPane,
    Pagination,
    Message,
    Table,
    TableColumn,
} from 'element-ui';

Vue.prototype.$message = Message

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
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)

import {
    Swipe,
    SwipeItem,
    Cell,
    Navbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    InfiniteScroll,
    Lazyload,
} from 'mint-ui';

Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(Cell.name, Cell);
Vue.component(SwipeItem.name, SwipeItem);