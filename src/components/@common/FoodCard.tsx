import Image from "next/image";
import sample from "../../../public/images/sample.png";
import marker from "../../../public/icons/marker.png";
import clock from "../../../public/icons/clock.png";
import menu from "../../../public/icons/menu.png";

interface Props {
    title: string;
    distance: string;
    mark: string;
    time: string;
    info: string;
}

export default function FoodCard({ title, distance, mark, time, info }: Props) {
    const foodTitle = "text-[32px] font-semibold";
    const infoText = "text-[18px] text-info pl-2";
    const infoBox = "flex items-center";

    return (
        <div className="w-[1200px] h-[637px] bg-[#6060600D]">
            <Image src={sample} alt="sample" width={1200} />
            <div className="mx-[24px] mt-[32px]">
                <h2 className={foodTitle}>{title}</h2>
                <div className="flex items-center mt-8">
                    <p className="text-[20px]">{distance}</p>
                    <p className="opacity-20 px-[8px]"> &#47;</p>
                    <p className="text-[20px] text-[#2196F3]">상세 위치 보기</p>
                </div>
                <div className="mt-16">
                    <div className={infoBox}>
                        <Image src={marker} alt="marker" width={20} />
                        <p className={infoText}>{mark}</p>
                    </div>
                    <div className="flex items-center my-4">
                        <Image src={clock} alt="clock" width={20} />
                        <p className={infoText}>{time}</p>
                    </div>
                    <div className={infoBox}>
                        <Image src={menu} alt="menu" width={20} />
                        <p className={infoText}>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
