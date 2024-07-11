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
                                            src="https://www.youtube.com/embed/jqP9BTAaspg?si=UC1M6KPheYUiAnDa"
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
                                            src="https://www.youtube.com/embed/qQ4dtOugDoA?si=_Rn6vJwmh34QWFGP"
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
                                            Hướng dẫn Stake bằng HRX
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
                                            src="https://www.youtube.com/embed/oM2fXc-aito?si=AsuiP4kmsskWi_mZ"
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
                                            src="https://www.youtube.com/embed/KeXXR3SpxYU?si=Ou4nAg1c5w3CfzCF"
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
                                            Hướng dẫn đăng ký tài khoản HorusLayer - Register an account Guide ( Tiếng Anh ) 
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
                                            src="https://www.youtube.com/embed/hBAnZBxEhPg?si=OuVpi7CZMjt4MCip"
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
                                            Hướng dẫn Restaking - Restaking Guide ( Tiếng Anh ) 
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
                                            src="https://www.youtube.com/embed/1Z6Xt6BVds4?si=hg-GrvTQ785c67KF"
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
                                            Hướng dẫn Claim lợi nhuận từ Restaking - Claim Profit Guide ( Tiếng Anh ) 
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
                                            src="https://www.youtube.com/embed/0ICvZiHbVDk?si=_ICdZdJwox2d-cVd"
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
                                            Hướng dẫn Swap HRX sang USDT - Swap HRX Guide ( Tiếng Anh ) 
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
                                            src="https://www.youtube.com/embed/fxZrL2Tw8kc?si=H6S5Lwj_GRwc-V0z"
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
                                            Thuận Capital chia sẻ dự án HorusLayer
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
                                            src="https://www.youtube.com/embed/wD6YQe5dpb8?si=GvBVNTsbrx5mzId5"
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
                                            5 phút Crypto chia sẻ dự án HorusLayer
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
                                            src="https://www.youtube.com/embed/bROfj2B9lCQ?si=kxiv9wxiakRILquB"
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
                                            Opp dự án HorusLayer | 13/06/2024
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
                                            src="https://www.youtube.com/embed/_eDbTh_gk54?si=TToktwhCGfUMIvPY"
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
                                            chia sẻ chuyên sâu dự án HorusLayer | 18/5/2024
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
                                            src="https://www.youtube.com/embed/wD6YQe5dpb8?si=GvBVNTsbrx5mzId5"
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
                                            Gặp gỡ giao lưu trực tiếp Co-founder Horus Layer Mr.Mohamed | 18/5/2024
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
                                            src="https://www.youtube.com/embed/bROfj2B9lCQ?si=kxiv9wxiakRILquB"
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
                                            Sự kiện Private Party của Long Capital | 25/05/2024
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
                                            src="https://www.youtube.com/embed/w74A9cfUH6Q?si=NLOx7ALVIaGdVGxy"
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
                                        <p className="text-white font-medium first-letter:uppercase">
                                            Contract hBNB mạng BSC : 0x624729BaB8a55013E417ebb4803D6c3866e53934
                                        </p>
                                        <p className="text-white font-medium first-letter:uppercase">
                                            Contract hSOL mạng BSC : 0x867cCBd23E8FDCb397108C9B42b9362Df3ec68A3
                                        </p>
                                        <p className="text-white font-medium first-letter:uppercase">
                                            Contract hINJ mạng BSC : 0x35E4e3ab776f332faa2d7E0522aD5a09EB17F4a2
                                        </p>
                                        <p className="text-white font-medium first-letter:uppercase">
                                            Contract hETH mạng BSC : 0xd35b8aa9e0349224ACA038ca906D3775d10e7898
                                        </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                          <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            2. Slide dự án Horus Layer
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
                                            <a href="https://docs.google.com/presentation/d/1N4xTtXLNjBXT-2yCzLm18pvT-4j9C89q/edit?usp=sharing&ouid=117684027990047482565&rtpof=true&sd=true"> ấn vào đây để download Slide về</a>
                                        </p>
                                      
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                         <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            3. Slide dự án Horus Layer ( tiếng anh )
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
                                            <a href="https://drive.google.com/file/d/1Y3MY3k5_72C1mAJxITUxFBoivnX01lKU/view?usp=sharing"> ấn vào đây để download Slide về</a>
                                        </p>
                                      
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                          <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white text-black px-4 py-2 text-left text-sm font-medium hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                        <span className="block text-base first-letter:uppercase font-semibold">
                                            4. Horus Affiliate Program ( tiếng anh )
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
                                            <a href="https://drive.google.com/file/d/1hTodnnVojSvcVl7OcrlWF60dp9UWu7hP/view?usp=sharing"> ấn vào đây để download Slide về</a>
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
