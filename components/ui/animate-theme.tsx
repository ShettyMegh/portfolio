"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "./button";

interface AnimatedThemeTogglerProps
	extends React.ComponentPropsWithoutRef<"button"> {
	duration?: number;
}

export const AnimatedThemeToggler = ({
	className,
	duration = 400,
	...props
}: AnimatedThemeTogglerProps) => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = !!(resolvedTheme === "dark");

	const buttonRef = useRef<HTMLButtonElement>(null);

	const getIcon = () => {
		if (!mounted) return <Moon />;
		return isDark ? <Sun /> : <Moon />;
	};

	const toggleTheme = useCallback(async () => {
		if (!buttonRef.current) return;

		const nextTheme = isDark ? "light" : "dark";

		// If View Transitions API is not available, just toggle the theme
		if (!document.startViewTransition) {
			setTheme(nextTheme);
			return;
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(nextTheme);
			});
		}).ready;

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const x = left + width / 2;
		const y = top + height / 2;
		const maxRadius = Math.hypot(
			Math.max(left, window.innerWidth - left),
			Math.max(top, window.innerHeight - top),
		);

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRadius}px at ${x}px ${y}px)`,
				],
			},
			{
				duration,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	}, [isDark, duration, setTheme]);

	return (
		<Button
			ref={buttonRef}
			onClick={toggleTheme}
			className={cn(className)}
			size="icon-lg"
			variant="ghost"
			aria-label="Toggle theme"
			{...props}
		>
			{getIcon()}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};
