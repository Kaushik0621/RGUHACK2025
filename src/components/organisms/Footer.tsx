import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const sponsors = [
    { name: 'Dev4', logo: 'https://rguhack.uk/sponsors/dev4.png' },
    { name: 'Mintra', logo: 'https://rguhack.uk/sponsors/mintra.png' },
    { name: 'Areg', logo: 'https://rguhack.uk/sponsors/areg.png' },
    { name: 'CGI', logo: 'https://rguhack.uk/sponsors/cgi.png' },
    { name: 'Sword', logo: 'https://rguhack.uk/sponsors/sword.png' },
    { name: 'Fennex', logo: 'https://rguhack.uk/sponsors/fennex.png' },
    { name: 'Aize', logo: 'https://rguhack.uk/sponsors/aize.png' },
    { name: 'Elementz', logo: 'https://rguhack.uk/sponsors/elementz.png' },
    { name: 'Salus', logo: 'https://rguhack.uk/sponsors/salus.png' },
    { name: 'Core29', logo: 'https://rguhack.uk/sponsors/core29.png' },
    { name: 'Socet', logo: 'https://rguhack.uk/sponsors/socet.png' },
];

// CSS for the marquee animation
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
`;

const Footer = () => {
  return (
    <footer className="bg-[#eadcfa] py-4 overflow-hidden border-t mx-auto max-w-[1204px] max-h-[100px] sticky bottom-0" style={{ margin: 0, zIndex: 10 }}>
      <style>{styles}</style> {/* Injecting CSS styles directly */}
      <div className="relative flex flex-col items-center">
        <Marquee
          fade={true}
          direction="left"
          reverse={false}
          pauseOnHover={false}
          className="" // pass class to change gap or speed
          innerClassName="" // pass class to change gap or speed
        >
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="mx-8 flex items-center justify-center">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="h-12 object-contain rounded-lg"
                onError={(e) => { e.currentTarget.src = 'fallback-image-url.png'; }} // Optional: Fallback image
              />
            </div>
          ))}
        </Marquee>
      </div>
    </footer>
  );
};

export default Footer; 