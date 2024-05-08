import './Header.css'

interface HeaderProps {
    image: string;
    alt: string;
    title: string;
    description: string;

}

export function Header({image, alt, title, description}: HeaderProps) {
    return (
        <header>
            <img src={image} alt={alt}/>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}