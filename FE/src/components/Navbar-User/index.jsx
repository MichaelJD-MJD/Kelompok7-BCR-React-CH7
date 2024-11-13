import {
    Button,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.svg";

const navigation = [
    { name: "Our Services", href: "#", current: true },
    { name: "Why Us", href: "#", current: false },
    { name: "Testimonial", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function NavbarUser() {
    return (
        <Disclosure as="nav" className="bg-[#F1F3FF]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Rental Car"
                                src={logo}
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
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
                                <Button className="bg-[#5CB85F] text-white rounded-md px-4 py-2 text-sm font-medium">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

            <DisclosurePanel className="sm:hidden">
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
}
