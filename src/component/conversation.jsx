import doctor1  from "../../public/doctors-1.jpg"
const Conversation = () => {
  return (
   <section  className="flex items-center border-b-gray-500 border-b-[1px] p-1 gap-[10px] py-[0.5rem]">
    <img src={doctor1}  alt="user_pics"  className="w-[60px] h-[60px]  rounded-[50%]" />
    <h1>John Doe</h1>

   </section>
  )
}

export default Conversation