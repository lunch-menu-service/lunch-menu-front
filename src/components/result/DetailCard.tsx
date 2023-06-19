import React from "react";

export default function DetailCard() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[1200px]">
                <div className="bg-slate-400 w-full h-[309px]"></div>
                <div className="bg-[#606060]/5 px-6 py-8">
                    <div className="text-[32px] font-bold mb-2">레전드치킨</div>
                    <div className="flex text-[20px] font-regular">
                        <div className="text-info">1.2km</div>
                        <div className="text-[#60606026]">&nbsp;/&nbsp;</div>
                        <div className="text-[#2196F3]">상세 위치 보기</div>
                    </div>
                    <div className="my-8 w-full h-[1px] bg-[#60606026]" />
                    <div>
                        <div className="flex mb-4">
                            <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0.759766 7.74C0.759766 3.74386 4.00362 0.5 7.99977 0.5C11.9959 0.5 15.2398 3.74386 15.2398 7.74C15.2398 10.9796 13.4744 14.1533 11.7729 16.4721C10.9152 17.6408 10.0586 18.6127 9.41636 19.2926C9.095 19.6328 8.82665 19.9006 8.63782 20.084C8.54338 20.1758 8.46878 20.2465 8.41732 20.2948C8.40481 20.3065 8.39367 20.3169 8.38394 20.3259C8.37366 20.3355 8.36495 20.3435 8.35788 20.35L8.34193 20.3647L8.33754 20.3687L8.33625 20.3698L8.33584 20.3702C8.3357 20.3703 8.33558 20.3704 7.99977 20C7.66395 20.3704 7.66383 20.3703 7.66369 20.3702L7.66328 20.3698L7.66199 20.3687L7.6576 20.3647L7.64165 20.35C7.62789 20.3373 7.60794 20.3189 7.58221 20.2948C7.53075 20.2465 7.45615 20.1758 7.36171 20.084C7.17288 19.9006 6.90453 19.6328 6.58317 19.2926C5.94097 18.6127 5.0843 17.6408 4.22665 16.4721C2.52517 14.1533 0.759766 10.9796 0.759766 7.74ZM7.99977 20L7.66395 20.3704L7.99977 20.6749L8.33558 20.3704L7.99977 20ZM7.99976 19.3095C8.17518 19.1376 8.41132 18.9003 8.68942 18.6059C9.31097 17.9479 10.1393 17.0079 10.9667 15.8804C12.6352 13.6067 14.2398 10.6504 14.2398 7.74C14.2398 4.29614 11.4436 1.5 7.99977 1.5C4.55591 1.5 1.75977 4.29614 1.75977 7.74C1.75977 10.6504 3.36437 13.6067 5.03288 15.8804C5.86023 17.0079 6.68856 17.9479 7.31011 18.6059C7.58821 18.9003 7.82435 19.1376 7.99976 19.3095ZM7.97976 4.89C6.53591 4.89 5.36977 6.05614 5.36977 7.5C5.36977 8.94386 6.53591 10.11 7.97976 10.11C9.42362 10.11 10.5898 8.94386 10.5898 7.5C10.5898 6.05614 9.42362 4.89 7.97976 4.89ZM4.36977 7.5C4.36977 5.50386 5.98362 3.89 7.97976 3.89C9.97591 3.89 11.5898 5.50386 11.5898 7.5C11.5898 9.49614 9.97591 11.11 7.97976 11.11C5.98362 11.11 4.36977 9.49614 4.36977 7.5Z"
                                    fill="#3C3C3C"
                                />
                            </svg>
                            <div className="ml-2">서울 강동구 아리수로93나길 26 성산타워 111호</div>
                        </div>
                        <div className="flex mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3C3C3C" stroke-miterlimit="10" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 5H12.5V11.5886L18.8762 12.8394L18.6838 13.8206L11.5 12.4114V5Z" fill="#3C3C3C" />
                            </svg>
                            <div className="ml-2">10:00~20:00</div>
                        </div>
                        <div className="flex">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5401 8.73C11.5401 10.52 10.0901 12.56 8.31008 12.56C6.53008 12.56 5.08008 10.51 5.08008 8.73C5.08008 6.95 6.53008 5.5 8.31008 5.5C10.0901 5.5 11.5401 6.95 11.5401 8.73Z"
                                    stroke="#3C3C3C"
                                    stroke-miterlimit="10"
                                />
                                <path d="M8.31055 12.56V18.1" stroke="#3C3C3C" stroke-miterlimit="10" />
                                <path d="M18.9101 5.67V8.86C18.9101 10.04 17.6701 11 16.1401 11C14.6201 11 13.3701 10.04 13.3701 8.86V5.67" stroke="#3C3C3C" stroke-miterlimit="10" />
                                <path d="M16.1396 5.67V18.1" stroke="#3C3C3C" stroke-miterlimit="10" />
                                <path
                                    d="M20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2Z"
                                    stroke="#3C3C3C"
                                    stroke-miterlimit="10"
                                />
                            </svg>
                            <div className="ml-2">후라이드치킨, 땡초치킨</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
