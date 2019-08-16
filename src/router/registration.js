import UserRegistration from '@/pages/RegistrationPage/index'


export default {
    path: '/reg',
    name: 'Registration',
    component: UserRegistration,
    meta: {
        guest: true
    }
}