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
import UserProfileComponent from '@/pages/UserProfile/index'


export default {
    path: '/home',
    component: TopNavigation,
    children: [
        {
            path: '/',
            name: 'Index',
            component: HomePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/index',
            name: 'HomePage',
            component: HomePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/products',
            name: 'ProductList',
            component: ProductsList,
            meta: {
                requiresAuth: true
            }
        },
        {

            path: '/user/:id',
            name: 'VieUserComponent',
            component: ViewUserComponent,
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/edituser/:id',
            name: 'EditUser',
            component: EditUser,
            meta: {
                requiresAuth: true
            }
        },
        {

            path: '/user/new',
            name: 'CreateUser',
            component: CreateUserComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/user/item',
            name: 'CreateItem',
            component: CreateItem,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/adduser',
            name: 'AddUser',
            component: AddUserComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: UserProfileComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/chat',
            name: 'ChatRoom',
            component: ChatRoom,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '/chats/:id',
                    name: 'Messages',
                    component: ChatMessages,
                    meta: {
                        requiresAuth: true
                    }
                },
            ]
        }


    ]

}
