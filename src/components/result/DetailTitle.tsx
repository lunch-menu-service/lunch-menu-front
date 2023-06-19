import React from "react";

export default function DetailTitle() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[1200px] py-[80px]">
                <div className="w-full flex justify-between">
                    <div>
                        <div className="text-primary font-bold text-[40px] mb-[8px]">추천 맛집</div>
                        <div>현재 위치 기반으로 가장 가까운 추천 맛집을 찾아봤어요.</div>
                    </div>
                    <div>
                        <button className="bg-primary rounded-[50px] w-[174px] h-[72px]">
                            <span className="text-white text-[24px] font-bold">식당 더보기</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
