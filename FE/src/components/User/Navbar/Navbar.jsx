import React, { useCallback, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../../service/auth/auth.service";
import { setToken, setUser } from "../../../redux/slices/auth";
import {
    Button,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/logo.svg";
import { useQuery } from "@tanstack/react-query";

const navigation = [
    { name: "Our Services", href: "#", current: true },
    { name: "Why Us", href: "#", current: false },
    { name: "Testimonial", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth);
    //         // fetch get profile
    //         const result = await profile();
    //         if (result.success) {
    //             // set the user state here
    //             dispatch(setUser(result.data));
    //             return;
    //         }

    //         // If not success
    //         // delete the local storage here
    //         dispatch(setUser(null));
    //         dispatch(setToken(null));

    //         // redirect to login
    //         navigate({ to: "/login" });
    //     };

    //     if (token) {
    //         // hit api auth get profile and pass the token to the function
    //         getProfile(token);
    //     }
    // }, [dispatch, navigate, token]);

    const handleLogout = useCallback(() => {
      // delete the local storage here
      dispatch(setUser(null));
      dispatch(setToken(null));

      // redirect to login
      navigate({ to: "/login" });
    }, [dispatch, navigate]);

    // use react query to fetch API
    const { data, isSuccess, isError } = useQuery({
        queryKey: ["profile"],
        queryFn: profile,
        enabled: token ? true : false,
    });

    useEffect(() => {
      if (isSuccess) {
        dispatch(setUser(data));
      } else if (isError) {
        handleLogout();
      }
    }, [isSuccess, isError, data, dispatch, handleLogout]);

    const logout = (event) => {
        event.preventDefault();
        handleLogout();
    };

    return (
        <Disclosure as="nav" className="bg-[#F1F3FF]">
            <div className="mx-auto container px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center">
                            <a href="/">
                                <img
                                    alt="Rental Car"
                                    src={logo}
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="hidden md:ml-6 lg:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                        className={classNames(
                                            item.current
                                                ? "bg-blue-600 text-white"
                                                : "hover:bg-blue-400 hover:text-white",
                                            "rounded-md px-3 py-2 text-sm font-medium"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                {user ? (
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        {/* Profile dropdown */}
                                        <Menu
                                            as="div"
                                            className="relative ml-3"
                                        >
                                            <div>
                                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <img
                                                        alt=""
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        className="size-8 rounded-full"
                                                    />
                                                </MenuButton>
                                            </div>
                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                    >
                                                        Your Profile
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                    >
                                                        Settings
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        onClick={logout}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                    >
                                                        Sign out
                                                    </a>
                                                </MenuItem>
                                            </MenuItems>
                                        </Menu>
                                    </div>
                                ) : (
                                    <Button className="bg-[#5CB85F] text-white rounded-md px-4 py-2 text-sm font-medium">
                                        Register
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="inset-y-0 left-0 flex items-center lg:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white ">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block size-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden size-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel
                className="lg:hidden fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
                tabIndex="-1"
                aria-labelledby="offcanvaslabel"
            >
                <a href="/"id="offcanvaslabel" aria-hidden="true">
                    <img alt="Rental Car" src={logo} className="h-8 w-auto" />
                </a>
                <XMarkIcon data-drawer-hide="offcanvas" aria-controls="offcanvas" className="hidden size-6 group-data-[open]:block" />
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? "page" : undefined}
                            className={classNames(
                                item.current
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-blue-400 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    <Button className="bg-[#5CB85F] text-white rounded-md px-4 py-2 text-sm font-medium">
                        Register
                    </Button>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Navbar;
