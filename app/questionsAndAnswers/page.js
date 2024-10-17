import QuestionAndAnswer from '@/app/components/QuestionAndAnswer';
import Navbar from '@/app/components/Navbar';

export const metadata = { title: 'السؤال والجواب' }

const Page = () => {

  return (
    <>
      <Navbar />
      <QuestionAndAnswer />
    </>
  );
};

export default Page;
