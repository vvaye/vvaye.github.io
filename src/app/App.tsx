import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";

const NAV_LINKS = [
	{ label: "Projects", href: "#projects" },
	{ label: "Photos", href: "#photos" },
	{ label: "Resume", href: "#resume" },
];

export default function App() {
	const [activeSection, setActiveSection] = useState("");
	const [scrolled, setScrolled] = useState(false);

	const scrollTo = (href: string) => {
		{
			/*TBD*/
		}
	};

	return (
		<div
			className="min-h-screen bg-background text-foreground"
			style={{ fontFamily: "'Inter', sans-serif" }}
		>
			{/* nav bar */}
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled
						? "border-b border-border bg-background/95 backdrop-blur-sm"
						: ""
				}`}
			>
				<nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
					<button
						onClick={() => scrollTo("#hero")}
						className="text-sm tracking-widest uppercase font-medium hover:opacity-60 transition-opacity"
					>
						yevivian
					</button>

					{/* desktop nav bar */}
					<div className="hidden md:flex items-center gap-8">
						{NAV_LINKS.map((link) => (
							<button
								key={link.href}
								onClick={() => scrollTo(link.href)}
								className={`text-sm transition-opacity ${
									activeSection === link.href.slice(1)
										? "opacity-100 font-medium"
										: "opacity-50 hover:opacity-80"
								}`}
							>
								{link.label}
							</button>
						))}
					</div>

					{/** Stuff for the mobile menu goes here */}
				</nav>
			</header>
			{/* end nav bar */}

			{/* Hero section */}
			<section
				id="hero"
				className="max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32"
			>
				<div className="flex flex-col gap-8">
					<p
						className="text-xs tracking-widest uppercase opacity-50"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						Computer Science and Engineering - Class of 2028
					</p>
					<h1
						className="text-5xl md:text-8xl font-semibold leading-none tracking-tight"
						style={{ fontFamily: "'Playfair Display', serif" }}
					>
						Vivian Ye
					</h1>
				</div>
			</section>
			{/*endhero */}

			{/** end  entire div of the website*/}
		</div>
	);
}
