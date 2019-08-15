import TopNavigation from '@/components/TopNavigationDrawer/index'
import HomePage from '@/pages/HomePage/index'
import ProductsList from '../pages/Products/ProductList';
import ViewUserComponent from "../pages/ViewUserPage/index";
import CreateUserComponent from '../components/CreateUser.vue';
import EditUser from '@/components/EditUser';
import CreateItem from '../components/CreateItem.vue';
import AddUserComponent from "../pages/AddUser/index";
import ChatRoom from '@/pages/ChatRoom/ChatRoomPage/index'
import ChatMessages from '@/pages/ChatRoom/MessagesPage/index'


export default {
    path: '/home',
    component: TopNavigation,
    children: [
        {
            path: '/',
            name: 'Index',
            component: HomePage
        },
        {
            path: '/index',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/products',
            name: 'ProductList',
            component: ProductsList,
        },
        {

            path: '/user/:id',
            name: 'VieUserComponent',
            component: ViewUserComponent
        }, {
            path: '/edituser/:id',
            name: 'EditUser',
            component: EditUser
        },
        {

            path: '/user/new',
            name: 'CreateUser',
            component: CreateUserComponent
        },
        {
            path: '/user/item',
            name: 'CreateItem',
            component: CreateItem
        },
        {
            path: '/adduser',
            name: 'AddUser',
            component: AddUserComponent,
        },
        {
            path: '/chat',
            name: 'ChatRoom',
            component: ChatRoom,
            children: [
                {
                    path: '/chats/:id',
                    name: 'Messages',
                    component: ChatMessages,
                },
            ]
        }


    ]

}
