import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

// eslint-disable-next-line react/prop-types
const ProjectsCard = ({ url, img, title, text }) => {
	return (
		<article className="bg-white rounded-lg shadow-md hover:shadow-2xl duration-300">
			<a href={url}>
				<img
					src={img}
					alt={title}
					className="mt-4 w-full object-contain rounded-t-lg h-64"
				/>
			</a>

			<div className="capitalize p-8">
				<h2 className="text-xl tracking-wide font-medium">{title}</h2>
				<p className="mt-4 text-slate-700 leading-loose">{text}</p>
				<div className="mt-4 flex gap-x-4">
					<a href={url} target="_blank">
						<TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
					</a>
					<a href="https://github.com/jdavidmcgee" target="_blank">
						<FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectsCard;