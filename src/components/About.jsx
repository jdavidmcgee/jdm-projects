import aboutSvg from '../assets/aboutSvg1.svg';
import SectionTitle from './SectionTitle';

const About = () => {
	return (
		<section className="bg-white py-20" id="about">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutSvg} alt="about image" className="w-full h-64" />
				<article>
					<SectionTitle text="about me" />
					<p className="text-lg text-slate-600 mt-8 leading-loose">
						I am a full stack developer with a passion for creating web
						applications that are fast, responsive, and user-friendly. My
						FSSD certification is through the University of Texas at
						Austin.  I am always looking to learn
						new technologies and improve my skills as a developer. I work
						well with others while being unafraid to take the lead.
						Experienced communicator and presenter of complex ideas and
						solutions. Resilient. Curious. Creative.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
