import Link from 'next/link';
import Image from 'next/image';

const Card = ({id, name, email}) => {
	const imageUrl = `https://robohash.org/${id}?size=200x200`;

	return (
		<Link href={`/robots/${id}`}>
			<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
				<Image src={imageUrl} alt={`Robot ${name}`} width={200} height={200}/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</Link>
	);
}

export default Card;