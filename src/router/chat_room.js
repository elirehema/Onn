import ChatRoom from '@/pages/ChatRoom/ChatRoomPage/index'
import ChatMessages from '@/pages/ChatRoom/MessagesPage/index'
export default {
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
