import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ArrowUpRight, X, Menu } from "lucide-react";

const NAV_LINKS = [
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Thoughts", href: "#thoughts" },
	{ label: "About", href: "#about" },
];

const SKILLS = [
	"Python",
	"Typescript",
	"Minispec",
	"C",
	"Assembly",
	"SystemVerilog",
	"Git",
	"Teaching",
];

const GITHUB_REPO_LINKS = {
	peep: "https://github.com/vvaye/peep",
	r5st: "https://github.com/vvaye/R5-ST",
};

const PROJECTS = [
	{
		num: "00",
		key: "proj-00",
		title: "PEEP: An Image is Worth 16x16 Tiles",
		tags: ["FPGA", "SystemVerilog", "Computer Architecture"],
		year: "2025",
		desc: "A quad-core processor specially designed for computer vision workloads. It takes advantage of parallel combinational memory reads and parallelizable properties of image processing tasks in its design of parallel processor cores and square memory caches. Final project for Digital Systems Laboratory I.",
		resources: [
			{ label: "Report", href: "/assets/peep.pdf" },
			{ label: "GitHub", href: GITHUB_REPO_LINKS.peep },
		],
	},
	{
		num: "01",
		key: "proj-01",
		title: "R5-ST: A Framework for Transit Accessibility Analysis",
		tags: ["Python", "R5", "Research"],
		year: "2025-2026",
		desc: "A reusable and streamlined Python toolkit that generalizes spatio-temporal accessibility analysis over population and transit data using the R5 routing engine. Presented at the 2026 TransitData conference.",
		resources: [
			{ label: "Abstract", href: "/assets/r5st.pdf" },
			{ label: "GitHub", href: GITHUB_REPO_LINKS.r5st },
		],
	},
	{
		num: "02",
		key: "proj-02",
		title: "Orbit Determination: Near-Earth Asteroid 2005 EC224",
		tags: ["Python", "Astrophysics"],
		year: "2023",
		desc: `Conducted astrometry and photometry, developed Python implementations of the Method of Gauss for orbital analysis,
			and used Monte Carlo simulations for uncertainty calculations. Final results were submitted to the Minor Planet Center
			as part of the SSP 2023 Summer Program.`,
		resources: [{ label: "Report", href: "/assets/ssp.pdf" }],
	},
];

const EXPERIENCES = [
	{
		num: "00",
		key: "exp-00",
		title: "Software Engineer Intern",
		company: "Chewy",
		tags: ["Typescript", "React", "ERPNext", "Git"],
		year: "Summer 2026",
		desc: `As an intern on Chewy's CPH (Chewy Partner Hub) team, I'm building a centralized hub
			for vendor documentation within Chewy's internal vendor onboarding platform. I'm implementing the feature across the full
			stack, developing React frontend components, Python backend APIs, and the underlying business logic.`,
	},
	{
		num: "01",
		key: "exp-01",
		title: "Lab Assistant: Intro to Programming in C & Assembly",
		company: "MIT Department of EECS",
		tags: ["C", "Assembly", "Teaching"],
		year: "Spring 2026",
		desc: `I assisted students in weekly hands-on labs involving programming ESP32 microcontrollers and answered conceptual questions
				 on pointers and memory systems.`,
	},
	{
		num: "02",
		key: "exp-02",
		title: "Student Researcher",
		company: "MIT Zardini Lab",
		tags: ["Python", "R5", "Research", "High-Performance Computing"],
		year: "2025-2026",
		desc: (
			<>
				I spent one summer and two semesters conducting research with
				the Zardini lab. What began as a summer (2025) UROP benchmarking
				a transit routing engine eventually turned into a larger
				project,{" "}
				<a
					href="#proj-01"
					className="font-[400] opacity-100 hover:opacity-70 transition-opacity"
				>
					R5-ST
				</a>
				{", "}
				which I was then able to present at my first conference (summer
				2026).
			</>
		),
	},
	{
		num: "03",
		key: "exp-03",
		title: "Lab Assistant: Computation Structures",
		company: "MIT Department of EECS",
		tags: ["Minispec", "Digital Systems", "Processor Design", "Teaching"],
		year: "Fall 2025",
		desc: `I held weekly office hours where I guided students through the debugging of complex Minispec labs. 
		I helped students better understand digital system design, finite state machines, and processor datapaths.`,
	},
];

export default function App() {
	const [activeSection, setActiveSection] = useState("");
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);

			const sections = NAV_LINKS.map((l) => l.href.slice(1));
			let current = "";
			for (const id of sections) {
				const el = document.getElementById(id);
				if (el && window.scrollY >= el.offsetTop - 128) current = id;
			}

			setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (href: string) => {
		{
			setMenuOpen(false);
			const id = href.slice(1);
			const el = document.getElementById(id);
			if (el) el.scrollIntoView({ behavior: "smooth" });
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

					{/* Mobile menu button */}
					<button
						className="md:hidden opacity-70 hover:opacity-100 transition-opacity"
						onClick={() => setMenuOpen((v) => !v)}
						aria-label="Toggle menu"
					>
						{menuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</nav>

				{/* Mobile menu */}
				<div
					className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
					style={{
						maxHeight: menuOpen ? "400px" : "0px",
						opacity: menuOpen ? 1 : 0,
					}}
				>
					<div className="border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
						{NAV_LINKS.map((link) => (
							<button
								key={link.href}
								onClick={() => scrollTo(link.href)}
								className="text-left text-base py-1 opacity-70 hover:opacity-100 transition-opacity"
							>
								{link.label}
							</button>
						))}
					</div>
				</div>
			</header>
			{/* end nav bar */}

			{/* Hero section */}
			<section
				id="hero"
				className="max-w-6xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-32"
			>
				<div className="flex flex-col gap-8">
					<p
						className="text-sm tracking-widest uppercase opacity-50"
						style={{ fontFamily: "'JetBrains Mono', monospace" }}
					>
						Computer Science & Engineering · MIT
					</p>
					<h1
						className="text-5xl md:text-8xl font-semibold leading-none tracking-tight"
						style={{ fontFamily: "'Playfair Display', serif" }}
					>
						Vivian Ye
					</h1>
					<p className="text-lg md:text-xl max-w-2xl opacity-70 leading-relaxed font-light">
						I'm a student working on projects across the computing
						stack, from FPGA accelerators and transportation
						research to full-stack software. I enjoy learning new
						things, teaching others, and documenting what I discover
						along the way.
					</p>
					<div className="flex items-center gap-4 opacity-50">
						{[
							{
								icon: <IoMail size={18} />,
								label: "Email",
								href: "mailto:yevivian@mit.edu",
							},
							{
								icon: <FaLinkedin size={18} />,
								label: "LinkedIn",
								href: "#",
							},
							{
								icon: <FaGithub size={18} />,
								label: "GitHub",
								href: "#",
							},
						].map(({ icon, label, href }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								target="_blank"
								rel="noopener noreferrer"
								// className="hover:opacity-100 transition-opacity"
								className="flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
							>
								{icon}
								<span
									className="text-xs"
									style={{
										fontFamily:
											"'JetBrains Mono', monospace",
									}}
								>
									{label}
								</span>
							</a>
						))}
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
				className="max-w-6xl mx-auto px-6 pt-16 pb-4 md:py-28"
			>
				<SectionLabel number="0" label="Projects" />
				<div className="mt-8 divide-y divide-border">
					{PROJECTS.map((p) => (
						<div
							key={p.key}
							id={p.key}
							className="group py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-16 items-start scroll-mt-24"
						>
							{/* title and description column*/}
							<div className="flex flex-col gap-3">
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
									{/*tags */}
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

							{/* date and link column*/}
							<div className="flex flex-col items-end justify-end gap-4 md:flex-col md:items-end md:gap-2 pl-10 md:pl-0">
								<span
									className="text-sm opacity-30"
									style={{
										fontFamily:
											"'JetBrains Mono', monospace",
									}}
								>
									{p.year}
								</span>
								{/*resources */}
								{p.resources.length > 0 && (
									<div className="flex flex-row md:flex-col items-end gap-4 pt-2">
										{p.resources.map((r) => (
											<a
												key={r.label}
												href={r.href}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1 text-xs opacity-40 hover:opacity-80 transition-opacity"
											>
												{r.label}
												<ArrowUpRight size={10} />
											</a>
										))}
									</div>
								)}
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
				className="max-w-6xl mx-auto px-6 pt-16 pb-4 md:py-28"
			>
				<SectionLabel number="1" label="Experience" />
				<div className="mt-8 divide-y divide-border">
					{EXPERIENCES.map((e) => (
						<div
							key={e.key}
							className="group py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-16 items-start"
						>
							{/* title and description column*/}
							<div className="flex flex-col gap-3">
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

							{/* date column*/}
							<div className="flex items-center justify-end gap-4 md:flex-col md:items-end md:gap-2 pl-10 md:pl-0">
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

			{/* Divider yay */}
			<div className="max-w-6xl mx-auto px-6">
				<div className="border-t border-border" />
			</div>

			{/*blog */}
			<section
				id="thoughts"
				className="max-w-6xl mx-auto px-6 pt-16 pb-12 md:py-28"
			>
				<SectionLabel number="1" label="Thoughts" />
				<div className="mt-8 divide-y divide-border">
					<p className="text-base leading-relaxed opacity-60 font-light">
						Coming soon... stay tuned!
					</p>
				</div>
			</section>
			{/* end blog */}

			{/* Divider yay */}
			<div className="max-w-6xl mx-auto px-6">
				<div className="border-t border-border" />
			</div>

			{/* about me */}
			<section
				id="about"
				className="max-w-6xl mx-auto px-6 pt-16 pb-16 md:py-28"
			>
				<SectionLabel number="2" label="About" />
				<div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16">
					<div className="flex flex-col gap-8 opacity-60">
						<p className="text-base leading-relaxed font-light">
							I'm a (rising) third-year CS student at MIT. My
							interests lie at the intersection of computer
							architecture, digital systems, and low-level
							software. I enjoy thinking about how data moves
							through layers of abstraction; from high-level code
							to assembly instructions and binary representations,
							and how processors and pipelines are created and
							adapted to bring these systems to life.
						</p>
						<p className="text-base leading-relaxed font-light">
							Outside of academics, I'm a frisbee player, music
							enthusiast, amateur photographer, sitcom enjoyer,
							and noodle fiend.
						</p>
					</div>

					<div className="flex flex-col gap-6">
						{/* Currently */}
						<section className="flex flex-col gap-4">
							<h3
								className="text-sm md:text-sm tracking-widest uppercase opacity-40"
								style={{
									fontFamily: "'JetBrains Mono', monospace",
								}}
							>
								Currently
							</h3>
							<ul className="flex flex-col gap-3 text-sm opacity-60 font-light">
								<li>
									→ Rediscovering my love for{" "}
									<a
										href="https://setwithfriends.com"
										target="_blank"
										rel="noopener noreferrer"
										className="font-[400] hover:opacity-70 transition-opacity"
									>
										setwithfriends
									</a>
									.
								</li>
								<li>
									→ Playing summer league frisbee in the
									evenings.
								</li>
								<li>
									→ Learning Noah Kahan songs on the guitar.
								</li>
								<li>
									→ Experiencing Boston summer for the first
									time.
								</li>
							</ul>
						</section>
						{/* Skills */}
						<div className="flex flex-col gap-3 pt-4 border-t border-border max-w-sm">
							<h3
								className="text-sm md:text-sm tracking-widest uppercase opacity-40"
								style={{
									fontFamily: "'JetBrains Mono', monospace",
								}}
							>
								Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{SKILLS.map((s) => (
									<span
										key={s}
										className="text-xs px-3 py-1.5 opacity-60 bg-secondary border border-border"
										style={{
											fontFamily:
												"'JetBrains Mono', monospace",
										}}
									>
										{s}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* end about */}

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
