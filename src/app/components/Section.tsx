import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
	id?: string;
	children: ReactNode;
	className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
	return (
		<section
			id={id}
			className={twMerge(
				`max-w-6xl mx-auto px-6 pt-16 md:py-20`,
				className,
			)}
		>
			{children}
		</section>
	);
}
