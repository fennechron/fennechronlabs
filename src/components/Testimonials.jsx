import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	ArrowLeft,
	ArrowRight,
	Building2,
	Handshake,
	Quote,
	Rocket,
	ShieldCheck,
	Star,
	Layers3
} from 'lucide-react';

const testimonials = [
	{
		id: 1,
		quote:
			'The website made it much easier for us to manage students and training schedules. Everything feels simple and professional now.',
		author: 'Arjun Nair',
		initials: 'AN',
		category: 'Sports Academy',
		rating: 5,
	},
	{
		id: 2,
		quote:
			'The team understood our idea clearly and delivered a clean and modern platform. Our customers now enjoy a much smoother ordering experience.',
		author: 'Nikhil Menon',
		initials: 'NM',
		category: 'Restaurant Platform',
		rating: 5,
	},
	{
		id: 3,
		quote:
			'The appointment system helped us organize our clinic work better. Patients can now book appointments quickly without confusion.',
		author: 'Dr. Amal Krishnan',
		initials: 'AK',
		category: 'Healthcare Platform',
		rating: 5,
	},
	{
		id: 4,
		quote:
			'The final product looked modern and worked perfectly on all devices. The whole process was smooth from start to finish.',
		author: 'Rahul Pillai',
		initials: 'RP',
		category: 'Fitness Platform',
		rating: 5,
	},
];

const clientSignals = [
	{
		title: 'Clear Communication',
		description: 'We believe great collaboration comes from transparency, responsiveness, and communicating technical decisions in a way clients can actually understand.',
		icon: ShieldCheck,
	},
	{
		title: 'Fast, Focused Delivery',
		description: 'We prioritize impact first — helping teams launch faster, validate ideas earlier, and iterate intelligently.',
		icon: Rocket,

	},
	{
		title: 'Scalable Development',
		description: 'We build products with future growth in mind, making them reliable, maintainable, and ready to scale.',
		icon: Layers3,
	},
];

const Stars = ({ count = 5 }) => (
	<div className="flex gap-1.5" aria-label={`${count} star rating`}>
		{Array.from({ length: 5 }).map((_, index) => (
			<Star
				key={index}
				size={16}
				className={
					index < count
						? 'fill-brand-gold text-brand-gold'
						: 'fill-transparent text-brand-gold/30'
				}
			/>
		))}
	</div>
);

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const active = testimonials[activeIndex];

	const move = (direction) => {
		setActiveIndex((current) => {
			const next = current + direction;
			if (next < 0) return testimonials.length - 1;
			if (next >= testimonials.length) return 0;
			return next;
		});
	};

	return (
		<section
			id="testimonials"
			className="relative w-full overflow-hidden bg-brand-black px-6 py-28 md:px-12 lg:px-20 lg:py-36"
		>
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
				<div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(199,168,109,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(199,168,109,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
				<span
					className="absolute -right-8 top-8 hidden font-sans text-[18vw] font-bold uppercase tracking-[0.16em] text-transparent opacity-[0.025] lg:block"
					style={{ WebkitTextStroke: '2px rgba(199, 168, 109, 0.55)' }}
				>
					Voices
				</span>
			</div>

			<div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
				<div className="lg:sticky lg:top-28">
					<div className="mb-5 flex items-center gap-3">
						<span className="h-px w-8 bg-brand-gold" />
						<span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gold">
							Testimonials
						</span>
					</div>

					<h2 className="max-w-xl font-serif text-5xl font-light leading-[1.02] tracking-wide text-brand-white md:text-6xl lg:text-7xl">
						Trusted by <br />
						<span className="gold-gradient-text italic">Ambitious Teams</span>.
					</h2>

					<p className="mt-7 max-w-lg font-sans text-base font-light leading-relaxed text-gray-400 md:text-lg">
						We work closely with founders, startups, and businesses to deliver digital products that combine strong engineering with meaningful user experience.
					</p>

					<div className="mt-10 grid max-w-xl gap-3">
						{clientSignals.map((signal) => {
							const Icon = signal.icon;
							return (
								<div
									key={signal.title}
									className="group flex items-start gap-4 rounded-xl border border-brand-gold/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-brand-gold/30 hover:bg-brand-gold/[0.055]"
								>
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-gold/15 bg-brand-gold/10 text-brand-gold transition-transform duration-300 group-hover:scale-105">
										<Icon size={19} />
									</div>
									<div>
										<h3 className="font-sans text-sm font-semibold text-brand-white">
											{signal.title}
										</h3>
										<p className="mt-1 font-sans text-sm leading-relaxed text-gray-500">
											{signal.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="min-w-0">
					{/* Decorative Image Above Testimonial Box */}
					<div className=" translate-y-[50px]">
						<img
							src="/testimonial.png"
							alt="Client Testimonials"
							className="w-full z-10"

						/>
					</div>

					<div className="relative overflow-hidden rounded-2xl border border-brand-gold/15 bg-brand-gray/45 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 lg:p-10">
						<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-80" />
						<div className="mb-10 flex flex-wrap items-center justify-between gap-5">
							<div className="flex items-center gap-3 text-brand-gold">
								<div className="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-gold/20 bg-brand-gold/10">
									<Quote size={21} className="fill-brand-gold/20" />
								</div>
								<div>
									<p className="font-sans text-[11px] uppercase tracking-[0.28em] text-brand-gold">
										Featured Review
									</p>
									<p className="mt-1 font-sans text-sm text-gray-500">
										{active.category}
									</p>
								</div>
							</div>
							<Stars count={active.rating} />
						</div>

						<AnimatePresence mode="wait">
							<motion.div
								key={active.id}
								initial={{ opacity: 0, y: 18 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -18 }}
								transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
							>
								<p className="font-serif text-2xl font-light italic leading-relaxed text-brand-white md:text-4xl">
									"{active.quote}"
								</p>

								<div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
									<div className="flex items-center gap-4">
										<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-gold/25 bg-black/50 font-sans text-lg font-bold text-brand-gold">
											{active.initials}
										</div>
										<div>
											<h3 className="font-sans text-lg font-semibold text-brand-white">
												{active.author}
											</h3>
											<p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-gray-500">
												{active.role} / {active.company}
											</p>
										</div>
									</div>


								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					<div className="mt-8 flex items-center justify-between gap-5">
						<div className="flex items-center gap-2">
							{testimonials.map((testimonial, index) => (
								<button
									key={testimonial.id}
									type="button"
									onClick={() => setActiveIndex(index)}
									className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
											? 'w-9 bg-brand-gold'
											: 'w-2.5 bg-white/20 hover:bg-white/40'
										}`}
									aria-label={`Show testimonial from ${testimonial.author}`}
								/>
							))}
						</div>

						<div className="flex items-center gap-3">
							<button
								type="button"
								onClick={() => move(-1)}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-brand-gold/50 hover:text-brand-gold active:scale-95"
								aria-label="Previous testimonial"
							>
								<ArrowLeft size={18} />
							</button>
							<button
								type="button"
								onClick={() => move(1)}
								className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-brand-gold text-brand-black transition-all duration-300 hover:bg-brand-white active:scale-95"
								aria-label="Next testimonial"
							>
								<ArrowRight size={18} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
