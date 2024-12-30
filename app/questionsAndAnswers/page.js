import QuestionAndAnswer from '@/app/components/QuestionAndAnswer';
import Navbar from '@/app/components/Navbar';
import NewsIcon from '@/app/components/NewsIcon'


export const metadata = { title: '100qa - السؤال والجواب' }

const Page = () => {

  return (
    <>
      <NewsIcon />
      <Navbar />
      <QuestionAndAnswer />
    </>
  );
};

export default Page;
