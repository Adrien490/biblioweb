import { ModeToggle } from "@/components/mode-toggle";
import { SignIn, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const menu = [
	{ text: "Accueil", link: "/" },
	{ text: "Catalogue", link: "/catalogue" },
	{ text: "Formules", link: "/formules" },
	{ text: "Contact", link: "/contact" },
	// Ajoutez d'autres éléments de menu ici
];

const Navbar = () => {
	return (
		<nav className="bg-muted h-[80px] flex items-center border-b">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-lg flex space-x-8 font-bold">
					<Link href="/">Logo</Link>
					<ul className="flex">
						{menu.map((item, index) => (
							<li
								className="h-[80px] flex items-center px-2 hover:bg-primary transition"
								key={index}
							>
								<Link href={item.link} legacyBehavior>
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex">
					<ModeToggle />
          <SignInButton mode="modal">Se connecter</SignInButton>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
