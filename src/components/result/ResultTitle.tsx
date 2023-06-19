import React from "react";

export default function ResultTitle() {
    return (
        <div className="w-full h-[600px] bg-slate-400 flex justify-center items-center">
            <div>
                <div>
                    <div className="text-center text-[24px] font-regular mb-[8px] text-white">한식 메뉴를 랜덤으로 골라봤어요</div>
                    <div className="text-center text-[40px] font-bold text-white">🍽️ 오늘 메뉴는 치킨 어때요?</div>
                </div>
                <div className="flex justify-center mt-[32px]">
                    <button className="bg-white py-[8px] px-[32px] rounded-[50px]">
                        <div className="text-[24px] font-bold p-4 text-info">다시하기</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
