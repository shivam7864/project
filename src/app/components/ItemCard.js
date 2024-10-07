import Image from "next/image";

 
const ItemCard = ({ item }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={item.image} alt={item.title} className="w-full h-52 " />
      
       {/* <Image src={item.image} alt={item.title} height={140} width={140}/> */}
      <div className="p-4">
        <h2 className="text-4xl font-semibold">{item.title.slice(0,25)}</h2>
        <p className="text-gray-600">{item.description.slice(0, 60)}...</p>
      </div>
    </div>
  );
  
  export default ItemCard;
  