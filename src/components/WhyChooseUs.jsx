import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Target, Zap, HeartHandshake, Eye, Award } from 'lucide-react';

const coreValues = [
	{
		id: 'engineering',
		title: 'Reliable Engineering',
		description:
			'We build with long-term stability in mind — writing clean, secure, and production-ready codebases designed to scale under real-world demand.',
		icon: ShieldCheck,
		glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]',
		iconColor: 'text-emerald-500',
		borderColor: 'border-emerald-500/20',
		bgPattern:
			'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent',
	},
	{
		id: 'speed',
		title: 'Speed Without Compromise',
		description:
			'Fast execution matters. We move efficiently without sacrificing code quality, helping you launch quickly and iterate with confidence.',
		icon: Target,
		glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.08)]',
		iconColor: 'text-red-500',
		borderColor: 'border-red-500/20',
		bgPattern:
			'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent',
	},
	{
		id: 'scale',
		title: 'Scalable Architecture',
		description:
			'Our systems are engineered for growth from day one, with infrastructure and architectures designed to handle increasing traffic, complexity, and operational scale.',
		icon: Zap,
		glow: 'hover:shadow-[0_0_30px_rgba(199,168,109,0.08)]',
		iconColor: 'text-brand-gold',
		borderColor: 'border-brand-gold/20',
		bgPattern:
			'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent',
	},
	{
		id: 'support',
		title: 'Long-Term Partnership',
		description:
			'Launch is only the beginning. We continue supporting, improving, and evolving your product as your business grows.',
		icon: HeartHandshake,
		glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]',
		iconColor: 'text-blue-500',
		borderColor: 'border-blue-500/20',
		bgPattern:
			'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent',
	},
	{
		id: 'clean-code',
		title: 'Maintainable Codebases',
		description:
			'We create modular, typed, and well-documented systems that remain easy to expand, maintain, and hand over to future engineering teams.',
		icon: Eye,
		glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]',
		iconColor: 'text-purple-500',
		borderColor: 'border-purple-500/20',
		bgPattern:
			'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent',
	},
	{
		id: 'uiux',
		title: 'Premium Product Design',
		description:
			'Exceptional interfaces create immediate trust. We craft refined, modern user experiences that elevate your product and strengthen your brand identity.',
		icon: Award,
		glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.08)]',
		iconColor: 'text-yellow-500',
		borderColor: 'border-yellow-500/20',
		bgPattern:
			'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent',
	},
];

const features = coreValues.map((v) => {
	const Icon = v.icon;
	return {
		title: v.title,
		descText: v.description,
		icon: <Icon size={20} className="stroke-[1.5]" />,
	};
});

const StickyCard = ({ val, index, total }) => {
	const cardRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: cardRef,
		// The animation happens as the user scrolls PAST the sticky element
		offset: ['start start', 'start -100%'],
	});

	// Scale down and dim the card as it gets buried under newer cards
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

	const IconComp = val.icon;

	return (
		<motion.div
			ref={cardRef}
			style={{
				scale,
				opacity,
				top: `calc(15vh + ${index * 30}px)`,
				zIndex: index + 1,
			}}
			className={`sticky w-full max-w-5xl mx-auto glass-card rounded-[2rem] overflow-hidden border transition-all duration-500 flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-16 mb-[60vh] shadow-2xl group ${val.glow} ${val.borderColor}`}
		>
			<div
				className={`absolute inset-0 ${val.bgPattern} opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
			/>
			<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

			<div className="flex-1 relative z-10">
				<div
					className={`w-16 h-16 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-center mb-8 shadow-xl ${val.iconColor}`}
				>
					<IconComp size={32} className="stroke-[1.5]" />
				</div>
				<h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-brand-white mb-6">
					{val.title}
				</h3>
				<p className="font-sans text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed">
					{val.description}
				</p>
			</div>
		</motion.div>
	);
};

const Feature = ({ icon, title, children }) => (
	<div className="flex gap-4 items-start bg-brand-black/40 border border-brand-gold/5 rounded-lg p-5">
		<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-brand-gold/10 text-brand-gold">
			{icon}
		</div>
		<div>
			<h3 className="text-lg font-semibold text-brand-white">{title}</h3>
			<p className="mt-1 text-sm text-brand-white/75">{children}</p>
		</div>
	</div>
);

export default function WhyChooseUs() {
	return (
		<section
			id="why-us"
			className="relative w-full bg-brand-black z-10 pt-32 pb-[20vh] px-6 md:px-12 lg:px-20 overflow-visible"
		>
			{/* Ambient background glows */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="sticky top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px]" />
				<div className="sticky top-[60%] left-[70%] w-[350px] h-[350px] rounded-full bg-emerald-900/10 blur-[150px]" />
			</div>

			{/* Header */}
			<div className="w-full flex flex-col items-center mb-32 text-center max-w-7xl mx-auto z-10 relative">
				<div className="flex items-center gap-3 mb-6">
					<span className="w-8 h-[1px] bg-brand-gold" />
					<span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-bold">
						Why Us
					</span>
					<span className="w-8 h-[1px] bg-brand-gold" />
				</div>
				<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-brand-white tracking-wide leading-tight mb-6">
					Built Around <br/>
					<span className="italic font-normal gold-gradient-text">
						Real User Experience
					</span>
					.
				</h2>
				<p className="font-sans text-base md:text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
					Great software is more than functionality. We focus on performance, usability, scalability, and engineering quality to create products users trust from the very first interaction.
				</p>
			</div>

				<div className="grid gap-5 grid-cols-1 md:grid-cols-2">
					{features.map((f, i) => (
						<Feature key={i} icon={f.icon} title={f.title}>
							{f.descText}
						</Feature>
					))}
				</div>

				<div className="mt-8 text-center">
					<a
						href="#contact"
						className="inline-block px-6 py-3 bg-brand-gold text-brand-black rounded-md font-medium hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-brand-gold/40"
						aria-label="Contact us"
					>
						Get in touch
					</a>
				</div>
			
		</section>
	);
}
