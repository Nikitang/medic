import { Faq } from 'entities/Faq/ui/Faq';
import { Reviews } from 'entities/Reviews';
import { About } from 'features/About';

const AboutPage = () => {
    return (
        <div>
            <About />
            <Reviews />
            <Faq />
        </div>
    );
};

export default AboutPage;
