import FoodCard from "@/components/@common/FoodCard";
import SemiHeader from "@/components/@common/SemiHeader";

export default function page() {
    // 식당 더보기 API 호출

    return (
        <main className="mx-[360px]">
            <SemiHeader
                title="추천 맛집 더보기"
                desc="현재 위치 기반으로 가장 가까운 추천 맛집을 찾아봤어요."
            />
            <FoodCard
                title="레전드치킨"
                distance="1.2km"
                mark="서울 강동구 아리수로93나길 26 성산타워 111호"
                time="10:00~20:00"
                info="후라이드치킨, 땡초치킨"
            />
        </main>
    );
}
