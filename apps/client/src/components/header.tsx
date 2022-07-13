import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

import { NavLink, useNavigate } from "react-router-dom";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Header(props: { user: { picture: string; credential: string } }) {
    let navigate = useNavigate();

    const googleLogOut = () => {
        window.google.accounts.id.disableAutoSelect();
        navigate("/", { replace: true });
        window.location.reload();
    };
    const navigation = [
        {
            name: "Home",
            route: "/",
            dependency: true,
        },
        {
            name: "Create",
            route: "/create",
            dependency: props.user.credential,
        },
        {
            name: "Retrieve",
            route: "/retrieve",
            dependency: true,
        },
    ];

    const toggleDarkMode = () => {
        // if set via local storage previously
        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
        }
    };

    const userNavigation = [
        { name: "Toggle Dark Mode", href: "#", onclick: toggleDarkMode },
        { name: "Sign out", href: "#", onclick: googleLogOut },
    ];

    return (
        <Disclosure as="nav" className="bg-gray-800 dark:bg-gray-900">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <h1 className="block w-auto text-white">Dead Man's Switch</h1>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map(
                                            (item) =>
                                                item.dependency && (
                                                    <NavLink to={item.route} key={item.name} className={({ isActive }) => classNames(isActive ? "bg-gray-900 dark:bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium")}>
                                                        {item.name}
                                                    </NavLink>
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Menu as="div" className="ml-3 relative">
                                    {props.user.picture ? (
                                        <>
                                            <div>
                                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={props.user.picture} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a href={item.href} onClick={item.onclick} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    ) : (
                                        <div id="g_id_signin" className="rounded-full">
                                            Sign In
                                        </div>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <NavLink to={item.route} key={item.name} className={({ isActive }) => classNames(isActive ? "bg-gray-900 dark:bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium")}>
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
