import Button from '@/components/Button';

const Home = () => {
  return (
    <div>
      <Button
        type="positive"
        text="버튼텍스트"
        onClick={() => {
          alert('hi');
        }}
      />
    </div>
  );
};

export default Home;
