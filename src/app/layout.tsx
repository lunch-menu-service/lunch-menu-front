import "./globals.css";
import Header from "@/components/@common/Header";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
