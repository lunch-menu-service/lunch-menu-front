import MenuCard from "@/components/main/MenuCard";

export default function Home() {
    return (
        <div className="flex justify-center mt-[56px]">
            <div>
                <div>
                    <div className="text-center mb-[8px] font-regular text-[24px]">점또몰은 &lt;점심 메뉴 또 몰라!&gt;의 줄임말로, 점심메뉴와 함께 가까운 식당을 추천해드립니다.</div>
                    <div className="text-center font-bold text-[40px] mb-[12px]">아래 메뉴를 한가지만 선택해주세요!</div>
                </div>
                <div className="grid grid-cols-3">
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        </div>
    );
}
