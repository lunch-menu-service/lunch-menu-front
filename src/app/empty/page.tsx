import React from "react";
import EmptyIcon from "@/components/empty/EmptyIcon";

export default function page() {
    return (
        <div className="w-full justify-center flex">
            <div>
                <EmptyIcon />
                <div className="text-[#606060B2] text-center text-[40px] font-bold leading-[50px]">
                    <div>근처에 식당이 더 없어요. </div>
                    <div>다시 해 볼까요?</div>
                </div>
                <div className="flex justify-center mt-14">
                    <button className="py-2 px-8">
                        <span className="text-[#3C3C3C] text-[24px] font-bold">다시하기</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
