import { ExternalLink } from "react-external-link"

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <h4>Raydelys Morrobel Reyes</h4>
                <span>Full Stack Web Developer</span>
                <span>Pursuit Fellow 9.4 N&W</span>
            </div>
            <p>Github: <ExternalLink href="https://github.com/arerimr" target="_blank">@arerimr</ExternalLink ></p>
            <p>Linkedin: <ExternalLink href="https://www.linkedin.com/in/raydelysmr" target="_blank">Raydelys M R</ExternalLink></p>
        </div>
    )
}
