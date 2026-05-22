import { Faq } from 'entities/Faq/ui/Faq';
import { Doctors } from 'entities/Doctors';
import { About } from 'features/About';

const AboutPage = () => {
    return (
        <div>
            <About />
            <Doctors />
            <Faq />
        </div>
    );
};

export default AboutPage;
