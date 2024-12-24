import Link from "next/link";
import Image from "next/image";
import Brand from "@/public/images/logo.svg";

export default function Logo() {
	return (
		<Link href="/" className="inline-flex" aria-label="DewaKreatif">
			<Image src={Brand} alt="DewaKreatif" width={120} height={40} />
		</Link>
	);
}
