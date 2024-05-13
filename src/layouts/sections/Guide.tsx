import { Tab, Disclosure } from "@headlessui/react";
import { CourseTabs } from "../../components";
import { IoIosArrowDown } from "react-icons/io";

const Guide = () => (
    <section className="bg-slate-800 text-white px-4 py-8">
        <div className="max-w-[60rem] min-h-[60vh] mx-auto">
            <h2 className="text-xl text-center first-letter:uppercase font-bold mb-4">
                hướng dẫn
            </h2>
            <Tab.Group>
                {/* Tab header list */}
                <CourseTabs />
                {/* Tab content */}
                <Tab.Panels className="py-6">
                    {/* Tab panel 1 */}
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Hướng dẫn đăng ký tài khoản HorusLayer
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/Sri14TzZ0xU?si=wDkR6ltVDRRz4stu"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Hướng dẫn Restaking
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/NPbM-2nuaHw?si=AFYL0DJ5x65-HL0a"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Hướng dẫn Claim lợi nhuận từ Restaking
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/YkYoEIN0PoM?si=fHKkap6RwjtGVeap"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                       
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Hướng dẫn đổi HRX sang USDT
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com/embed/xn6q4AqKFJE?si=0wQyJ4XVACI3u2Px"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                      
                       
                    </Tab.Panel>
                   
                   
                  
                    <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            Opp dự án HorusLayer
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                     <Disclosure.Panel className="text-sm text-gray-500">
                                        <iframe
                                            className="w-full aspect-video"
                                            src="https://www.youtube.com"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        ></iframe>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </Tab.Panel>
                     <Tab.Panel className="grid gap-2">
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            1. Contract TOKEN
                                        </span>
                                        <IoIosArrowDown
                                            className={`${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5 text-black`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-sm text-gray-500">
                                        <p className="text-white font-medium first-letter:uppercase">
                                            Contract HRX mạng BSC : 0x8A3C92a7A7Aa9eed4d390aAD1708dD5995720dAe
                                        </p>
                                         <p className="text-white font-medium first-letter:uppercase">
                                            Contract USDT mạng BSC : 0x55d398326f99059fF775485246999027B3197955
                                        </p>
                                         <p className="text-white font-medium first-letter:uppercase">
                                            Contract ETH mạng BSC : 0x2170Ed0880ac9A755fd29B2688956BD959F933F8
                                        </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                         
                        
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </section>
);

export default Guide;
