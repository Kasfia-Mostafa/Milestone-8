import PriceOption from "../../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
    {
      id: 1,
      name: 'Basic Membership',
      price: 29.99,
      features: [
        'Access to gym facilities',
        'Cardio equipment usage',
        'Locker room access',
        'Online workout videos',
      ],
    },
    {
      id: 2,
      name: 'Standard Membership',
      price: 49.99,
      features: [
        'Access to gym facilities',
        'Cardio equipment usage',
        'Strength training equipment usage',
        'Group fitness classes',
        'Locker room access',
        'Personalized workout plans',
      ],
    },
    {
      id: 3,
      name: 'Premium Membership',
      price: 79.99,
      features: [
        'Access to gym facilities',
        'Cardio equipment usage',
        'Strength training equipment usage',
        'Group fitness classes',
        'Personal trainer sessions (2/month)',
        'Locker room access with sauna',
        'Nutritional counseling',
        'Access to all gym branches nationwide',
      ],
    },
  ];
  

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices In The Town</h2>
     <div className="grid md:grid-cols-3 gap-6">
     {
        priceOptions.map(option => <PriceOption 
        key={option.id}
        option={option
        }></PriceOption>)
      }
     </div>
    </div>
  );
};

export default PriceOptions;