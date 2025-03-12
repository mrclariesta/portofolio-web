"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButon from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "./(spotify)/card.jsx";

// images
import Me1 from "@/public/img/me1.jpg";
import Me2 from "@/public/img/me2.jpg";
import Me3 from "@/public/img/me3.jpg";
import Hr from "@/components/Hr";

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon onClick={handleBack}>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ ease: "circOut", duration: 1 }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={Me2}
								alt="Marcel"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							About Me
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
							A brief introduction about me and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								my interest.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full">
									<Image
										src={Me1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full">
									<Image
										src={Me2}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full">
									<Image
										src={Me3}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							Marcel Ariesta
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							Hey there, I&rsquo;m Marcel Ariesta, a
							<span className="text-black font-medium">
								{" "}
								data enthusiast
							</span>{" "}
							
						
							Originating from DKI Jakarta, East Jakarta, Indonesia,
							I&rsquo;m currently Graduated from{" "}
							<span className="text-black font-medium">
								Mercu Buana Unversity,
							</span>{" "}
							where I&rsquo;m pursuing my degree in{" "}
							<span className="text-black font-medium">
								Computer Science, with GPA 3.46.
							</span>{" "}
							My passion for technology and data knows no
							bounds. Beyond the world of data, I find myself
							deeply immersed in the realms of analyst, scientist, and the fascinating universe of AI. I
							believe that in today&rsquo;s fast-paced digital
							landscape, being a
							<span className="text-black font-medium">
								{" "}
								lifelong learner
							</span>{" "}
							is not just a choice, but a necessity. Let&rsquo;s
							connect and explore this ever-evolving world of tech
							together!
						</p>
						<Card />
					</motion.div>
				</div>
				<div className=" w-screen mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
					<motion.div
						className="flex justify-center items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
							Programming Language
						</h2>
						<p className="text-gray-500 text-center tracking-widest md:px-5">
							<span className="text-black font-medium">HTML</span> |{" "}
							<span className="text-black font-medium">CSS</span> |{" "}
							<span className="text-black font-medium">
								Python
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								SQL
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">React</span>{" "}
							
						</p>
					</motion.div>
					<motion.div
						className="flex justify-start items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.6,

							type: "spring",
						}}>
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
							Tools
						</h2>
						<p className="text-gray-500 text-center tracking-wider md:px-">
							<span className="text-black font-medium">
								Visual Studio Code
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Tableau
							</span>{" "}
							| <span className="text-black font-medium">Git</span>{" "}
							|{" "}
							<span className="text-black font-medium">Github</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Orange Data
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Google Data Studio
							</span>{" "}
							<span className="text-black font-medium">
								PostgreSQL
							</span>{" "}
							<span className="text-black font-medium">
								Jupyter
							</span>{" "}
							<span className="text-black font-medium">
								Google Colab
							</span>{" "}
						</p>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{
								opacity: 0,
								x: -100,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}></motion.div>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{
								opacity: 0,
								x: 200,
							}}
							whileInView={{
								opacity: 1,
								x: -50,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}></motion.div>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,

								type: "spring",
							}}>
							Education &amp; Experience
						</motion.h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1 md:grid-cols-2 my-10 ">
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
							Education | Universitas Mercu Buana
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
							Computer Science |
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							I&rsquo;m currently Graduated from
							Mercu Buana University, majoring in Computer Science.
							This journey has been nothing short of exhilarating, 
							filled with countless opportunities to learn and grow.
							With a steadfast dedication to my studies, I&rsquo;ve 
							achieved a commendable GPA of 3.46. Throughout my 
							academic journey, I&rsquo;ve into various facets of
							computer science, honing my skills in data analyst, 
							data scientist, and problem-solving.
						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
							Experience | Freelance Web Developer
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
							Fullstack Web Developer | 2020 - 2022
						</h3>
						<p className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							My experience extends across various technologies,
							with a primary focus on Reactjs and PHP.
							I&rsquo;ve successfully completed three projects
							using Reactjs and PHP. What sets me apart is my
							ability to adapt to different project requirements.
							Whether working collaboratively as part of a team or
							independently, I ensure that each project I
							undertake meets high-quality standards and fulfills
							the unique needs of clients.
						</p>
					</motion.div>
				</div>
			</main>
		</>
	);
}
