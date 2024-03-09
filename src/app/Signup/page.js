"use client"
import { useState,useEffect } from 'react';
import Image from 'next/image';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import styles from './page.module.css'; 
import axios from 'axios';
export default function Sign_up() {
  const [jobs, setJobs] = useState([]);
  const [country, setCountry] = useState('');
  const [job, setJob] = useState('');
  const [skills, setSkills] = useState('');
 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/jobs/jobs'); 
        setJobs(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des métiers:', error);
      }
    };

    fetchJobs();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Pays:', country);
    console.log('Emploi:', job);
    console.log('Compétences:', skills);
  };
    return(
        <div className={styles.bgWhite}>
        <div className={styles.minHScreen}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Sign Up</h2>
            <form className={styles.form} action="/" method="POST">
              <div className={styles.inputGroup}>
              <div className={styles.inputContainer}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainer}>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    placeholder="Date of birth"
                    className={styles.input}
                    style={{
                        color: '#808080'    
                        }}
                  />
                </div>
                <div className={styles.inputContainer}>
                  
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainer}>
                  
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Confirm Password"
                    className={styles.input}
                  />
                </div>
                <div className={styles.inputContainer}>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className={styles.input}
        >
          <option value="">choose your country</option>
          <option value="France">France</option>
          <option value="Canada">Canada</option>
          <option value="United States">United Staters</option>
          <option value="Tunisia">Tunisia</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <select
          id="job"
          value={job}
          onChange={(e) => {
            setJob(e.target.value);
            
            setSkills('');
          }}
          required
          className={styles.input}
        >
          <option value="">choose your job</option>
          {jobs.map(job => (
            <option key={job._id} value={job.job}>{job.job}</option>
          ))}
        </select>
      </div>
              {job && (
          <div className={styles.inputContainer}>
            
          
              <input
                  className={styles.input}
                  id="skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  name="email"
                  type="text"
                  placeholder="Choose your skills"
                  
                />
          </div>
        )}
              </div>
              <div className={styles.submitButtonContainer}>
                <button type="submit" className={styles.submitButton} >
                  Sign up
                </button>
              </div >
              <div className={styles.submitButtonContainer}>
              <a href="/" className={styles.sign_up}> Sign in</a>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
}