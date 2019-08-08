import EditUser from '@/components/EditUser';
import CreateUserComponent from '../components/CreateUser.vue';
import CreateItem from '../components/CreateItem.vue';


export default {
    path: '/item',
    name: 'Users',
    component: EditUser,
    children: [
        {
            path: '/user/:id',
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
        }
    ]
}