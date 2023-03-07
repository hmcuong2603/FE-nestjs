import React, { useEffect } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import './Menu.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const Menu = () => {
    const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
    const user = useSelector((state) => state.myListReducer.login.currentUser)
    const handleLogout = async () => {
        window.location.href = '/';
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('dataLogin')
        toast.info('LogOut Success !')
    };
    useEffect(() => {
        JSON.parse(window.localStorage.getItem('dataLogin'));
    }, [])
    const data = JSON.parse(window.localStorage.getItem('dataLogin'));
    return (
        <Menubar.Root className="MenubarRoot">
            {user || data ? (
                <>
                    <div className="nav-menu">
                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger">
                                <Link className="item" to="/">
                                    Home
                                </Link>
                            </Menubar.Trigger>
                        </Menubar.Menu>

                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger">
                                <Link className="item" to="/mytodo">
                                    AppTodo
                                </Link>
                            </Menubar.Trigger>
                        </Menubar.Menu>

                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger">
                                <Link className="item" to="/profile">
                                    Profile
                                </Link>
                            </Menubar.Trigger>
                        </Menubar.Menu>

                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger">
                                <Link className="item btn-login" to="/dashboard">
                                    Mydashboard
                                </Link>
                            </Menubar.Trigger>
                        </Menubar.Menu>


                    </div>
                    <div className='user-log'>
                        <div className='hi-name'>
                            {user ? <p>Hi <span>{user.name}</span></p> : <p>Hi <span>{data.name}</span></p>}
                        </div>

                        <Link onClick={handleLogout} className="item logout-item">
                            LogOut
                        </Link>
                    </div>
                </>
            )
                :
                (<div className='nav-menu'>
                    <Menubar.Menu>
                        <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="/">Home</Link></Menubar.Trigger>
                    </Menubar.Menu>

                    <Menubar.Menu>
                        <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="#">Account</Link></Menubar.Trigger>
                        <Menubar.Portal>
                            <Menubar.Content
                                className="MenubarContent"
                                align="start"
                                sideOffset={5}
                                alignOffset={-14}
                            >
                                <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>

                                    <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-login' to="/login">Login</Link></Menubar.Item>

                                    <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-register' to="/register">Register</Link></Menubar.Item>
                                    <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-forgot' to="/forgot">Forgot password</Link></Menubar.Item>
                                </Menubar.RadioGroup>
                            </Menubar.Content>
                        </Menubar.Portal>
                    </Menubar.Menu>
                </div>)}
        </Menubar.Root>
    );
};

export default Menu;