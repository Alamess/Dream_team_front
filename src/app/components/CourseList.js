"use client"
import Head from 'next/head';
import Sidebar from './Sidebar';
import { useSide } from '../context/Sidecontext';
import { PlusIcon,ChevronDoubleRightIcon} from '@heroicons/react/24/solid'
const courses = [
  { id: 1, title: 'Introduction to Web Development', link: '#' },
  { id: 2, title: 'Advanced JavaScript Course', link: '#' },
  { id: 3, title: 'UX/UI Design Fundamentals', link: '#' },
];

const skills = [ 'React', 'Node.js', 'UX/UI Design'];

export default function CourseList() {
const { sidebar,setsidebar,handleSidebar} = useSide();
  return (
    <>
    <Sidebar/>
    <div className="bg-gray-100 min-h-screen p-10">
    <div className="flex flex-row justify-between"  >
              <button  onClick={()=>{handleSidebar()}}>
                <ChevronDoubleRightIcon  className="h-10 w-10 text-primary hover:text-primaryHover" />
              </button> 
    </div>
      <Head>
        <title>Recommended Courses & Skills</title>
      </Head>
      <div className="flex max-w-6xl mx-auto">
        {/* Main content */}
        <div className="flex-grow">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Recommended Courses</h1>
          <div className="grid gap-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">{course.title}</h2>
                <a href={course.link} className="mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                  Enroll or Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar for Skills */}
        <div className="w-64 ml-10">
          <h2 className="text-xl font-semibold text-gray-800">Skills Needed</h2>
          <ul className="mt-4">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}