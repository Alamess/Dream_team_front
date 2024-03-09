"use client"
import { PlusIcon,ChevronDoubleRightIcon} from '@heroicons/react/24/solid'
import {useState } from "react";
import Modal from "../components/modal";
import Image from 'next/image';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { useSide } from '../context/Sidecontext';
import axios from 'axios';
export default function Opportunities() {
  const { sidebar,setsidebar,handleSidebar} = useSide();
  const initialState = {
    name: "",
    catégories: "",
    référence:"",
    couleur:"",
    produitDeFabrication: "",
    stock:"",
    prix:"",
    image:""
  }
  let job='engineer';
  const[formData,setFormData]=useState(initialState);
  const handleChange=(key,value)=>{
    setFormData({...formData,[key]:value});
  }
  const [id ,setid]=useState(6);
  const[articleList,setArticleList]=useState([]);
  const getjobs=()=>{
    axios.get('https://www.arbeitnow.com/api/job-board-api').then(res=>{
        const data = res.data ;
        const processedData = data.data.map(item => ({
          name:item.company_name,
          title:item.title,
          location:item.location,
          remote:item.remote,
          url: item.url,
          jobtypes : item.job_types
          
      }));
      setArticleList(processedData);
        })
        .catch((e)=>{console.log(e)})
  }
  getjobs();
  return (
    <>
     <Sidebar  />
    
    <div className="w-full px-10 pt-5 flex flex-col  items-center justify-between"  >
        <div className='flex w-full justify-between mb-5 '> 
              <div className='flex items-center space-x-6'>
              <button  onClick={()=>{handleSidebar()}}>
                <ChevronDoubleRightIcon  className="h-10 w-10 text-primary hover:text-primaryHover" />
              </button> 
                <h1 className='text-tertiary text-xl font-bold'>Opportunities</h1>
              </div>
              <Image src={require("../../../public/jobz.png")} width={40} height={30} className='mr-5' />
        </div>
        <div className='flex  flex-col overflow-auto w-full items-center'>
        {
          articleList.filter((item) => item.title.toUpperCase().includes(job.toUpperCase())).map((item) => {
            return (
              <>
              <ArticleCard id={item.company_name} title={item.title} remote={item.remote} location={item.location} url={item.url} jobtypes={item.jobtypes}/>
          </>
            );
          })
        }
         </div>
       
        
        
    </div>
    </>
  );
}
