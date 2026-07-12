import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";

const NAV_LINKS = [
	{ label: "Projects", href: "#projects" },
	{ label: "Photos", href: "#photos" },
	{ label: "Resume", href: "#resume" },
];

const PROJECTS = [
	{
		num: "00",
		key: "proj-00",
		title: "PEEP: An Image is Worth 16x16 Tiles",
		tags: ["FPGA", "SystemVerilog"],
		year: "2025",
		desc: "A quad-core processor specially designed for computer vision workloads. It takes advantage of parallel combinational memory reads and parallelizable properties of image processing tasks in its design of parallel processor cores and square memory caches. Final project for Digital Systems Laboratory I.",
		link: "",
	},
	{
		num: "01",
		key: "proj-01",
		title: "R5-ST: A Framework for Transit Accessibility Analysis",
		tags: ["Python", "R5", "Research"],
		year: "2025-2026",
		desc: "A reusable and streamlined Python toolkit that generalizes spatio-temporal accessibility analysis over population and transit data using the R5 routing engine. Presented at the 2026 TransitData conference.",
		link: "",
	},
	{
		num: "02",
		key: "proj-02",
		title: "SSP: something something near earth asteroid",
		tags: ["Python", "Hell"],
		year: "2023",
		desc: "Observations,, writing code,, orbital elements,, tbd when I dig out our old report",
		link: "",
	},
];

const EXPERIENCES = [
	{
		num: "00",
		key: "exp-00",
		title: "Software Engineer Intern",
		company: "Chewy",
		tags: ["Typescript", "React", "ERPNext"],
		year: "2026",
		desc: `Did some full-stack work as a member of Chewy's CPH (Chewy Partner Hub) team, an internal portal for vendor onboarding. 
				Built a new Vendor Resources Center, a repository for all vendor-related files. Implemented the full stack ??`,
	},
	{
		num: "01",
		key: "exp-01",
		title: "Student Researcher",
		company: "MIT Zardini Lab",
		tags: ["Python", "R5", "Research"],
		year: "2025-2026",
		desc: (
			<>
				Worked on{" "}
				<a
					href="#proj-01"
					className="underline underline-offset-2 hover:opacity-70 transition-opacity"
				>
					R5-ST
				</a>{" "}
				ina summer urop!
			</>
		),
	},
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
						vivian ye
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
						Computer Science & Engineering, Class of 2028
					</p>
					<h1
						className="text-5xl md:text-8xl font-semibold leading-none tracking-tight"
						style={{ fontFamily: "'Playfair Display', serif" }}
					>
						Vivian Ye
					</h1>
					<p className="text-lg md:text-xl max-w-xl opacity-70 leading-relaxed font-light">
						I'm a rising junior at MIT interested in building and
						reasoning about software and hardware systems.
					</p>
					<div className="flex items-center gap-6 pt-2">
						<a
							href="mailto:yevivian@mit.edu"
							className="inline-flex items-center gap-2 text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-200"
						>
							<Mail size={13} />
							Email me!
						</a>
						<div className="flex items-center gap-4 opacity-50">
							<a
								href="#"
								className="hover:opacity-100 transition-opacity"
								aria-label="Github"
							>
								<FaGithub size={17} />
							</a>
							<a
								href="#"
								className="hover:opacity-100 transition-opacity"
								aria-label="Linkedin"
							>
								<FaLinkedin size={17} />
							</a>
						</div>
					</div>
				</div>
			</section>
			{/*endhero */}

			{/* Divider yay */}
			<div className="max-w-6xl mx-auto px-6">
				<div className="border-t border-border" />
			</div>

			{/*Projects */}
			<section
				id="projects"
				className="max-w-6xl mx-auto px-6 py-20 md:py-28"
			>
				<SectionLabel number="0" label="Projects" />
				<div className="mt-12 divide-y divide-border">
					{PROJECTS.map((p) => (
						<div
							key={p.key}
							id={p.key}
							className="group py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-16 items-start scroll-mt-24"
						>
							{/* title and description column*/}
							<div className="flex flex-col gap-3">
								<div className="flex items-start gap-4">
									<div className="flex flex-col gap-2">
										<h3
											className="text-xl md:text-2xl font-semibold leading-tight max-w-2xl"
											style={{
												fontFamily:
													"'Playfair Display', serif",
											}}
										>
											{p.title}
										</h3>
										<p className="text-md opacity-60 leading-relaxed font-light max-w-xl">
											{p.desc}
										</p>
										<div className="flex flex-wrap gap-2 pt-1">
											{p.tags.map((t) => (
												<span
													key={t}
													className="text-xs px-2 py-0.5 border border-border opacity-60"
													style={{
														fontFamily:
															"'JetBrains Mono', monospace",
													}}
												>
													{t}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* date and link column*/}
							<div className="flex items-center justify-end gap-4 md:flex-col md:items-end md:gap-2 pl-10 md:pl-0">
								<span
									className="text-sm opacity-30"
									style={{
										fontFamily:
											"'JetBrains Mono', monospace",
									}}
								>
									{p.year}
								</span>
								<a
									href={p.link}
									className="inline-flex items-center gap-1 text-xs opacity-40 group-hover:opacity-80 transition-opacity"
								>
									See More <ArrowUpRight size={10} />
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* end projects */}

			{/* Divider yay */}
			<div className="max-w-6xl mx-auto px-6">
				<div className="border-t border-border" />
			</div>

			{/*Experience */}
			<section
				id="experience"
				className="max-w-6xl mx-auto px-6 py-20 md:py-28"
			>
				<SectionLabel number="0" label="Experience" />
				<div className="mt-12 divide-y divide-border">
					{EXPERIENCES.map((e) => (
						<div
							key={e.key}
							className="group py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-16 items-start"
						>
							{/* title and description column*/}
							<div className="flex flex-col gap-3">
								<div className="flex items-start gap-4">
									<div className="flex flex-col gap-2">
										<p
											className="text-xs tracking-widest uppercase opacity-50"
											style={{
												fontFamily:
													"'JetBrains Mono', monospace",
											}}
										>
											{e.company}
										</p>
										<h3
											className="text-xl md:text-2xl font-semibold leading-tight max-w-2xl"
											style={{
												fontFamily:
													"'Playfair Display', serif",
											}}
										>
											{e.title}
										</h3>
										<p className="text-md opacity-60 leading-relaxed font-light max-w-xl">
											{e.desc}
										</p>
										<div className="flex flex-wrap gap-2 pt-1">
											{e.tags.map((t) => (
												<span
													key={t}
													className="text-xs px-2 py-0.5 border border-border opacity-60"
													style={{
														fontFamily:
															"'JetBrains Mono', monospace",
													}}
												>
													{t}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>

							{/* date and link column*/}
							<div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2 pl-10 md:pl-0">
								<span
									className="text-sm opacity-30"
									style={{
										fontFamily:
											"'JetBrains Mono', monospace",
									}}
								>
									{e.year}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
			{/* end experience */}

			{/** end  entire div of the website*/}
		</div>
	);
}

function SectionLabel({ number, label }: { number: string; label: string }) {
	return (
		<div className="flex items-baseline gap-4">
			{/* <span
        className="text-xs opacity-25"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {number}
      </span> */}
			<h2
				className="text-3xl md:text-4xl font-semibold"
				style={{ fontFamily: "'Playfair Display', serif" }}
			>
				{label}
			</h2>
		</div>
	);
}
