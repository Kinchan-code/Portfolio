import { socialMedia } from '@/lib/data/social-media';
import Abbr from '@/components/tooltip/abbr';

function Socials() {
  return (
    <main className=''>
      <section className='flex flex-row gap-4'>
        {socialMedia.map((social, index) => (
          <div
            key={index}
            onClick={() => {
              if (social.link.startsWith('mailto:')) {
                window.location.href = social.link;
              } else {
                window.open(social.link, '_blank');
              }
            }}
          >
            <Abbr title={social.name}>{social.icon}</Abbr>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Socials;
