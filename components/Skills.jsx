import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import MongoDB from '../public/assets/skills/mongo.png';
import C from '../public/assets/skills/c++.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Node from '../public/assets/skills/node.png';
import GitHub from '../public/assets/skills/github.png';
import Python from '../public/assets/skills/python.png';
import SQL from '../public/assets/skills/sql.png';
import SpringBoot from '../public/assets/skills/springboot.png';
import Java from '../public/assets/skills/java.png';
import Numpy from '../public/assets/skills/numpy.png';
import Pandas from '../public/assets/skills/pandas.png';
import Matplotlib from '../public/assets/skills/matplotlib.png';

const skillList = [
  {
    name: 'C++',
    img: C,
  },
  {
    name: 'Java',
    img: Java,
  },
  {
    name: 'Python',
    img: Python,
  },
  {
    name: 'JavaScript',
    img: Javascript,
  },
  {
    name: 'Next.js',
    img: NextJS,
  },
  {
    name: 'React',
    img: ReactImg,
  },
  {
    name: 'Spring Boot',
    img: SpringBoot,
  },
  {
    name: 'Node.js',
    img: Node,
  },
  {
    name: 'SQL',
    img: SQL,
  },
  {
    name: 'MongoDB',
    img: MongoDB,
  },
  {
    name: 'HTML',
    img: Html,
  },
  {
    name: 'CSS',
    img: Css,
  },
  {
    name: 'Numpy',
    img: Numpy,
  },
  {
    name: 'Pandas',
    img: Pandas,
  },
  {
    name: 'Matplotlib',
    img: Matplotlib,
  },
  {
    name: 'Tailwind',
    img: Tailwind,
  },
  // {
  //   name: 'GitHub',
  //   img: GitHub,
  // },
]

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillList.map((skill, key) => (
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={skill.img} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
