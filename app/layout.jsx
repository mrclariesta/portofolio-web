import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Marcel | Portofolio",
	description:
		"My name is Marcel, I'm a Data Enthusiast and I'm passionate about it. I'm Graduated from Mercu Buana University.",
	author: "Marcel Ariesta",
	siteUrl: "https://marcelariesta.vercel.app/",
	applicationName: "Marcel",
	keywords: [
		"Marcel"
	],
	openGraph: {
		type: "website",
		url: "https://www.Marcel.my.id",
		title: "Marcel | Portofolio",
		description: "My name is Marcel, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Marcel Portofolio",
			},
		],
		site_name: "Marcel | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
