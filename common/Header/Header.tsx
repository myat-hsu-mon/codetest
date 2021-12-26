import clsx from "clsx";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiX } from "react-icons/fi";

import Logo from "../../public/logo-codigo-red.svg";
import headerStyles from "./Header.module.scss";

const navs = [
	{
		name: "Work",
		href: "/work",
	},
	{
		name: "Solutions",
		href: "/solutions",
	},
	{
		name: "Services",
		href: "/services",
	},
	{
		name: "About us",
		href: "/about-us",
	},
	{
		name: "Blog",
		href: "/blog",
	},
];

const Header: NextPage = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<header className={headerStyles.header}>
			<nav className={headerStyles.navbar}>
				<Link href="#" passHref>
					<a className={headerStyles.navLogo}>
						<Image src={Logo} alt="Codico Logo" width={145} height={33} />
					</a>
				</Link>
				<div className={headerStyles.menu}>
					<ul
						className={[
							headerStyles.navMenu,
							open ? headerStyles.show : headerStyles.hide,
						].join(" ")}
					>
						<div className={headerStyles.dismiss}>
							<button onClick={handleClose}>
								<FiX style={{ fontSize: "1rem" }} />
							</button>
						</div>
						{navs.map(({ name, href }) => (
							<li className={headerStyles.navItem} key={name}>
								<Link href={href} passHref>
									<a className={headerStyles.navLink}>{name}</a>
								</Link>
							</li>
						))}
					</ul>
					<button className={headerStyles.requestBtn}>Request a quote</button>
				</div>
				<button onClick={handleOpen} className={headerStyles.hamburger}>
					<span className={headerStyles.bar}></span>
					<span className={headerStyles.bar}></span>
					<span className={headerStyles.bar}></span>
				</button>
			</nav>
		</header>
	);
};

export default Header;
