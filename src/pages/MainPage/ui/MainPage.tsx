import { Card, CardHeightOptions, CardWidthOptions } from 'entities/Card/Card';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import Caduceus from 'shared/assets/icons/caduceus.png';

const MainPage = () => {
    console.log(2222);

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <Card width={CardWidthOptions.W3} height={CardHeightOptions.H2}>
                <img
                    src={Caduceus}
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                />
                <Text
                    align={TextAlign.CENTER}
                    title={'Med Clinic - лучшие специалисты'}
                    text="Клиника занимается предоставлением 
                    услуг разного спектра от анализов, до проведения операций"
                ></Text>
            </Card>
            <Card>
                <Text
                    title={'Med Clinic - лучшие специалисты'}
                    text="Клиника занимается предоставлением 
                    услуг разного спектра от анализов, до проведения операций"
                ></Text>
            </Card>
        </div>
    );
};

export default MainPage;
