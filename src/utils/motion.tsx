import { MotionStyle, MotionValue } from "framer-motion";

export const navVariants = {
	hidden: {
		opacity: 0,
		y: -50,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 1,
		},
	},
};

export const slideIn = (
	direction: "left" | "right" | "up" | "down",
	type?: any,
	delay?: number,
	duration?: number
) => ({
	hidden: {
		x: direction === "left" ? "-105%" : direction === "right" ? "105%" : 0,
		y: direction === "up" ? "105%" : direction === "down" ? "105%" : 0,
	},
	show: {
		x: 0,
		y: 0,
		transition: {
			type,
			delay,
			duration,
			ease: "easeOut",
		},
	},
});

export const staggerContainer = (staggerChildren: any, delayChildren: any) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

export const skillsContainer = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const textVariant = (delay?: number) => ({
	hidden: {
		y: 50,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay,
		},
	},
});

export const textContainer = {
	hidden: {
		opacity: 0,
	},
	show: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
	}),
};

export const textVariant2 = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
		},
	},
};

export const fadeIn = (
	direction: "left" | "right" | "up" | "down",
	type?: any,
	delay?: number,
	duration?: number
) => ({
	hidden: {
		x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
		y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: "easeOut",
		},
	},
});

export const planetVariants = (
	direction: "left" | "right" | "up" | "down"
) => ({
	hidden: {
		x: direction === "left" ? "-100%" : "100%",
		rotate: 120,
	},
	show: {
		x: 0,
		rotate: 0,
		transition: {
			type: "spring",
			duration: 1.8,
			delay: 0.5,
		},
	},
});

export const zoomIn = (delay?: number, duration?: number) => ({
	hidden: {
		scale: 0,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "tween",
			delay,
			duration,
			ease: "easeOut",
		},
	},
});

export const footerVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 0.5,
		},
	},
};

type MotionStyleWithCssVar = {
	[K in keyof MotionStyle as K | `--${string}`]:
		| MotionStyle[K]
		| MotionValue<number>
		| MotionValue<string>
		| MotionValue<any>;
};

export const stylesWithCssVar = (styles: MotionStyleWithCssVar) =>
	styles as any;
