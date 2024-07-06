import { nanoid } from 'nanoid';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
	{
		id: nanoid(),
		title: 'HTML',
		icon: <FaHtml5 className="h-16 w-16 text-blue-500" />,
		text: 'I have a solid understanding of HTML, having completed several certification courses and numerous projects that demonstrate my ability to create well-structured, semantic web pages.',
	},
	{
		id: nanoid(),
		title: 'CSS',
		icon: <FaCss3 className="h-16 w-16 text-blue-500" />,
		text: 'I have a good proficiency in CSS having completed many projects, where I have applied various styling techniques, including Flexbox, Grid, and responsive design, to create visually appealing web pages. I am also experienced with Bootstrap and Tailwind CSS.',
	},
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <FaJs className="h-16 w-16 text-blue-500" />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality. I am proficient in JavaScript, capable of writing clean and efficient code for both front-end and back-end development.',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className="h-16 w-16 text-blue-500" />,
		text: 'Through numerous projects, I have developed a strong proficiency in React, building dynamic and interactive user interfaces, and efficiently managing state and props.  I have worked with React Query, React Router, and Context API to create scalable and maintainable applications.',
	},
	{
		id: nanoid(),
		title: 'MongoDB',
		icon: <SiMongodb className="h-16 w-16 text-blue-500" />,
		text: 'Trained to effectively work with MondoDB - especially Mongo Atlas, understands structured and no-structured data models. I have completed several projects that involve designing and querying databases, as well as integrating them with back-end and front-end applications.',
	},
	{
		id: nanoid(),
		title: 'Node.js',
		icon: <FaNodeJs className="h-16 w-16 text-blue-500" />,
		text: 'Skilled in creating applications through Node.js; while understanding and being proficient with Express.js, RESTful APIs, and CRUD operations. I have integrated Node.js applications with various databases, including MongoDB and MySQL, using Mongoose for schema definition and data modeling.',
	},
];

export const projects = [
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/jdavidmcgee',
		title: 'first project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/jdavidmcgee',
		title: 'second project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
	{
		id: nanoid(),
		img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
		url: 'https://react-projects.netlify.app/',
		github: 'https://github.com/john-smilga',
		title: 'third project',
		text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
	},
];
