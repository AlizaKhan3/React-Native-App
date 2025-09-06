import Home from "../screens/dashboard/Home"
import Signup from "../screens/Signup"
import Login from "../screens/Login"
import Dashboard from "../screens/Dashboard"
import Settings from "../screens/dashboard/Settings"
import About from "../screens/About"
import Profile from "../screens/dashboard/Profile"
import Notifications from "../screens/dashboard/Notifications"
export const ScreenList = [
     {
        name: 'Signup',
        component: Signup,
        headerShown: false,
        authRequired: false,
    },
    {
        name: 'Login',
        component: Login,
        headerShown: false,
        authRequired: false,
    },
    {
        name: 'Home',
        component: Home,
        headerShown: false,
        authRequired: true,
    },
    {
        name: 'Dashboard',
        component: Dashboard,
        headerShown: true,
        authRequired: true,
    },
    {
        name: 'About',
        component: About,
        headerShown: false,
        authRequired: true,
    },
    {
        name: 'Notifications',
        component: Notifications,
        headerShown: false,
        authRequired: true,
    },
    {
        name: 'Settings',
        component: Settings,
        headerShown: false,
        authRequired: true,
    },
    {
        name: 'Profile',
        component: Profile,
        headerShown: false,
        authRequired: true,
    },
]