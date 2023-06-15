interface Props {
    title: string;
    desc: string;
}

export default function SemiHeader({ title, desc }: Props) {
    return (
        <section className="mt-[64px]">
            <h1 className="text-[40px]">{title}</h1>
            <p className="inline-block mt-[8px] mb-[64px] text-desc">{desc}</p>
        </section>
    );
}
