"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Telephone from "@/assets/Telephone"
import Email from "../../assets/Email"
import Location from "../../assets/Location"
import { CornerRightUp } from "lucide-react"

function Footer() {
	const [showButton, setShowButton] = useState(false)
	const footerRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop
			const windowHeight = window.innerHeight
			// Calculate the height at which you want the button to appear
			const triggerHeight = scrollHeight * 0.05 // Adjust the percentage as needed

			setShowButton(scrollTop > triggerHeight)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<footer className="bg-[#131313] pb-[10px]">
			<div
				className="lg:px-[62px] xl:px-[124px] space-y-8 px-4 py-4 sm:px-6 xl:space-y-16 xl:p-12"
				ref={footerRef}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] md:text-justify text-center">
					<div>
						<h1 className="text-[#fff] xl:text-[24px] text-[16px]  flex gap-2 items-center text-center md:justify-start justify-center">
							<span>QUEMA</span>
							<span>CONSULTING</span> <span>LIMITED</span>
							<span></span>{" "}
						</h1>
						<p className="mt-2 text-justify text-[#999]  text-[12px] xl:text-[16px] xl:min-w-[471px]  font-medium lg:min-w-[390px] w-full">
						Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning. 
						</p>
					</div>

					<div className="md:ml-[150px]">
						<p className="font-bold text-[#fff] text-[16px] leading-[33px] xl:text-[24px]">
							Useful Links
						</p>

						<ul className="mt-2 space-y-4 text-sm text-[#999] flex flex-col gap-2 text-[12px] font-medium xl:text-[20px]">
							<Link
								href="/"
								className=" transition hover:opacity-75"
							>
								Home
							</Link>

							<Link
								href="/about"
								className="transition hover:opacity-75"
							>
								About Us
							</Link>

							<Link
								href="/services"
								className="transition hover:opacity-75"
							>
								Services
							</Link>

							<Link
								href="/contact"
								className="t transition hover:opacity-75"
							>
								Contact Us
							</Link>
						</ul>
					</div>

					<div className="lg:ml-[50px] text-center">
						<div className="flex md:gap-10 md:items-center justify-start flex-col md:flex-row">
							<p className="font-medium text-[#fff] text-[24px] leading-[33px]">
								Contact Us
							</p>
						</div>

						<ul className="mt-6 space-y-4 text-sm md:items-start flex text-left justify-center  text-[#999] w-full items-center">
							<div className="flex flex-col md:items-start  gap-4 lg:gap-8 md:ml-[10px] ml-[45px] xl:text-[16px] text-[12px]  lg:ml-0">
								<p className="transition hover:opacity-75 flex items-center gap-4">
									<Location />
									<span>
										PLOT 268, Trans Amadi Industrial Layout Rd{" "}
										<span className="block">
											ordinance, Port Harcourt, 500211 <br /> Rivers
											State.
										</span>
									</span>
								</p>

								<p className="transition hover:opacity-75 flex items-center gap-4">
									<Telephone />
									<span>+234 8036866975</span>
								</p>

								<p className="transition hover:opacity-75 flex items-center gap-4">
									<Email />
									<span>quemaconsulting@gmail.com</span>
								</p>
							</div>
						</ul>

						{showButton && (
								<div
									className="mt-[80px] ml-[10px] fixed xl:bottom-[270px] lg:bottom-[320px] md:bottom-[80px] bottom-[50px] xl:right-[100px] lg:right-[50px] xs:right-[20px] xxxs:right-[10px] md:right-[20px]  bg-[#4a90e2] w-10 h-10 rounded-full flex items-center justify-center z-50"
									onClick={scrollToTop}
								>
                                    <CornerRightUp className="text-white" />
                                </div>
							
						)}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer