
import Head from 'next/head'
import CourseList from '../components/CourseList'
export default function Skills() {  
  return (
    <>
    <div>
        
      <Head>
        <title>Course Recommendations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <CourseList />
      </main>
    </div>
    </>
  )
}