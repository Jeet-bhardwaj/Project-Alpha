import styles from './Servicess.module.css';
import Calisthenics from './Service/Calisthenics';
import Cardio from './Service/Cardio';
import CrossFit from './Service/CrossFit';
import Yoga from './Service/Yoga';
import StrengthTraining from './Service/StrengthTraining';
import Zumba from './Service/Zumba';

const ServicesPage = () => {
  return (
    <>
      <Cardio></Cardio>
      <Calisthenics></Calisthenics>
      <CrossFit></CrossFit>
      <Yoga></Yoga>
      <StrengthTraining></StrengthTraining>
      <Zumba></Zumba>
    </>
  );
};

export default ServicesPage;
