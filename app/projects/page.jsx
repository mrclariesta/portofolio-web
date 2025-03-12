"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";

// images
import ReactChat1 from "@/public/projects/react-chat.png";
import ReactChat2 from "@/public/projects/react-chat2.png";
import ReactChat3 from "@/public/projects/react-chat3.png";
import ProjectAll from "@/public/img/projects-all.jpg";

import Reactno1 from "@/public/projects/1.png";
import Reactno2 from "@/public/projects/2.png";
import Reactno3 from "@/public/projects/3.png";

import Reactpak1 from "@/public/projects/pak1.png";
import Reactpak2 from "@/public/projects/pak2.png";
import Reactpak3 from "@/public/projects/pak3.png";

import Reactberas1 from "@/public/projects/beras1.png";
import Reactberas2 from "@/public/projects/beras2.png";

import Reactprecip1 from "@/public/projects/precip1.png";
import Reactprecip2 from "@/public/projects/precip2.png";

import Reactsenti1 from "@/public/projects/senti1.png";
import Reactsenti2 from "@/public/projects/senti2.png";
import Reactsenti3 from "@/public/projects/senti3.png";

import Reactfraud1 from "@/public/projects/fraud1.png";
import Reactfraud2 from "@/public/projects/fraud2.png";
import Reactfraud3 from "@/public/projects/fraud3.png";

// main project image


import Hr from "@/components/Hr";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";



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
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Marcel"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently working on.
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
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
						<h1 className="text-3xl font-bold mt-3">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={ReactChat1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={ReactChat3}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={ReactChat2}
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
							Prediction Emission Carbondioxide
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						hows a scatter plot graph comparing actual versus predicted CO2 emissions. 
						On the horizontal axis, there’s a label “Actual CO2 Emissions (g/km)” ranging from 0 to 500, 
						likely representing carbon emissions in grams per kilometer. The vertical axis is labeled 
						“Predicted CO2 Emissions (g/km).” Numerous blue dots are scattered across the graph, 
						each representing a data point where the position along the horizontal axis indicates the 
						actual emissions, and the position along the vertical axis indicates the predicted emissions. 
						A red dashed line titled “Ideal Fit” diagonally crosses the graph from bottom left to top right, 
						suggesting a reference for where predicted values would perfectly match actual values. 
						The blue dots cluster around this line, indicating that many of the predictions are close to actual values, 
						but with some variance. This scatter plot could be interesting or relevant for analyzing the 
						accuracy of a model used to predict CO2 emissions based on actual measurements.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1hUcBJKxIQ5lKY-llC7gG7P6exiLI9gMD?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>
				
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Reactno1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={Reactno3}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={Reactno2}
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
							Prediction Car Prices
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						The dataset contains information about various vehicles, including details such as their make, model, 
						year, price, engine specifications, and predicted prices. Each entry provides a full name, 
						a brief description of the vehicle, and additional attributes like the type (new or used), 
						transmission, trim, body style, number of doors, exterior and interior colors, drivetrain, and mileage. 
						This data can be used for analysis of vehicle features and market pricing trends.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1v0XBqSlt7zKPYDaUVzMQzviyHbvTncAF?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Reactfraud1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={Reactfraud3}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={Reactfraud2}
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
							Fraud Detection with LightGBM & Auto Encoder with tuning & without Tuning
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						The dataset contains transactional data, including features such as transaction amounts, 
						timestamps, and various customer attributes. Each entry provides information about individual 
						transactions and their labels, indicating whether they are fraudulent or not. This data 
						can be used for fraud detection, leveraging models like LightGBM and Autoencoder with 
						hyperparameter tuning and without tuning to identify anomalies and suspicious activities.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1E5bt9acAHksmnJpTPEqXNl0PA7PT8JEq?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview | Tuning
								</a>
							</Button>

							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1zMLP1M9UNlFcED8nfKjibACQrt9k7HLm?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview | No Tuning
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>

				
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Reactpak1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={Reactpak3}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={Reactpak2}
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
							Prediction, Classification, and Analysing Bank telemarketing campaigns
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						The dataset contains information about bank telemarketing campaigns, 
						including customer attributes such as age, job, marital status, education, and loan status, 
						as well as campaign details like the number of contacts, previous outcomes, and the day and 
						month of contact. Each entry also indicates whether the customer subscribed to a term deposit. 
						This data can be used to analyze customer behavior, predict subscription likelihood, and 
						optimize marketing strategies.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1zLkTrnpXwwOeAt9YTFSTRlBFJibKUXZ2?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>
					
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Reactberas1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={Reactberas2}
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
							Classification Rice and State
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						The dataset contains information about rice classification, including various physical 
						attributes such as area, perimeter, major and minor axis lengths, eccentricity, and convex area. 
						Each entry provides detailed measurements that can be used to distinguish different types of rice. 
						This data is valuable for building models to classify rice varieties and analyze their 
						characteristics.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1vUk2evW45-jPrVd60XZ-zuGqSoVJXnCo?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>
						
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Reactprecip1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={Reactprecip2}
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
							Predictipn Precip Type
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						The dataset contains information about weather conditions, including details such as 
						temperature, humidity, wind speed, and the type of precipitation (precip type). 
						Each entry specifies whether the precipitation is rain, snow, sleet, hail, or none. This data 
						can be used to analyze weather patterns and build models for predicting precipitation types.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1oO-yeIJ-SYhsJmsDlCJf-5077xV48_f4?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>
						
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Reactsenti1}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={Reactsenti3}
										alt="Marcel"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
										objectPosition="0% 0%"
									/>
								</motion.div>
							</div>

							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={Reactsenti2}
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
							Crawling, Sentiment Analysis with NER
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						The dataset contains Twitter data, including tweet content, user information, timestamps, 
						and sentiment labels. Each entry captures the text of the tweet, user metadata, and identified 
						named entities through NER (Named Entity Recognition). This data can be used for sentiment 
						analysis, tracking public opinion, and recognizing important entities mentioned in tweets.
						</p>{" "}
						<div className="mt-3">
							
								
							
							<Button variation="secondary">
								<a
									href="https://colab.research.google.com/drive/1YJqjVz8aS3-G6DjErjV2KPmb8wP-OfOr?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>

					
					</motion.div>
				</div>
			</main>
		</>
	);
}
