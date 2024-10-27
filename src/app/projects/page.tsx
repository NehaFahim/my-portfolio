import ProjectCard from "../component/projectcard/page";
import Head from "../components/navbar/nav";


const projects = [
  {
    title: 'Periodic Table',
    description: 'An interactive periodic table displaying all the elements with their properties.',
    image: '/periodic_table.png', 
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_this-is-my-assignment-work-using-code-of-activity-7188291874485354496-GaSD?utm_source=share&utm_medium=member_android',    
  },
  {
    title: 'Chess Board',
    description: 'A classic chess Board built with HTML, allowing two players to play against each other.',
    image: '/chessgame.webp',
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_chessboard-activity-7190626958349623297-TKz7?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'My First HTML Website',
    description: ' A simple website built with HTML, showcasing my first steps in web development.',
    image: '/intrhtml.webp',
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_webdevelopment-html-codingjourney-activity-7214198537796894721-Jk_O?utm_source=share&utm_medium=member_android',
  },
 
  {
    title: 'Independence Day Project',
    description: 'A project to celebrate the independence of Pakistan, showcasing key historical moments.',
    image: '/flag.jpg',
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_pakistanindependenceday-14august-pakistanzindabad-activity-7229383469456359426-Ksjm?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'Simple Calculator',
    description: '  A simple calculator built with JavaScript.  It can perform basic arithmetic operations.',
    image: '/jscalculate.png',
    link: 'https://github.com/NehaFahim/simple-calculator.git',
  },
  {
    title: 'BMI calculator',
    description: 'The BMI Calculator is a web application that allows users to calculate their Body Mass Index based on height and weight inputs.',
    image: '/BMI.jpg',
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_giaic-practice-simpleprogramme-activity-7213758266890174464-ubiV?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'ATM Machine',
    description: 'The ATM Machine project simulates basic banking functions, allowing users to perform transactions like withdrawals and balance inquiries.',
    image: '/atm machine.webp',
    link: 'https://github.com/NehaFahim/n3h4-ATM-project.git',
  },
  {
    title: 'QUIZ Built',
    description: 'The QUIZ Built project is a web application that allows users to take quizzes and test their knowledge on various topics.',
    image: '/quiz.webp',
    link: 'https://github.com/NehaFahim/myquiz-function-code.git',
  },
  {
    title: 'User Login Form',
    description: 'The User Login Form project enables users to securely log in and access their accounts through a simple interface.',
    image: '/login.webp',
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_webdevelopment-loginform-html-activity-7231221243302055937-O5UB?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'NextJS Components & Routing',
    description: 'The NextJS Navbar and Footer project features a responsive navigation bar and footer, enhancing website usability and accessibility across different pages.',
    image: '/web.png',
    link: 'https://github.com/NehaFahim/nextjs-routing-links.git',
  },
  {
    title: 'Student ID Card',
    description: 'The Student ID Card project in Next.js generates a dynamic digital ID card that displays essential student information in a modern and responsive layout. ',
    image: '/idcard.jpg',
    link: 'https://github.com/NehaFahim/ID-Card.git',
  },
  {
    title: 'To-Do-List',
    description: ' The "To-Do-List" project is a web app for managing tasks, enabling users to add, edit, delete, and mark tasks as complete.',
    image: '/to do.png',
    link: 'https://www.linkedin.com/posts/neha-fahim-9710952b7_giaic-typescript-programming-activity-7233037934474534913-0oSA?utm_source=share&utm_medium=member_android',
  },
  {
    title: 'NextJs HELLO WORLD',
    description: ' The "NextJs HELLO WORLD" project serves as a basic introduction to Next.js, demonstrating how to create a simple web application using this powerful React framework.',
    image: '/hello world.png',
    link: 'https://github.com/NehaFahim/hello-nextjs.git',
  },
  {
    title: 'CLI Number Guessing Game',
    description: 'The CLI Number Guessing Game is a command-line application that challenges players to guess a randomly generated number within a limited number of attempts.',
    image: '/guess.jpg',
    link: 'https://github.com/NehaFahim/code-n3h4-cli-number-guessing.git',
  },


];

const ProjectsPage = () => {
  return (
    <div>
    <Head/>
<div className="bg-white">

    <div className="container mx-auto p-6 ">
       
      <h1 className="text-5xl font-bold mb-8 text-center font-serif text-purple-900 underline decoration-yellow-500">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProjectsPage;






