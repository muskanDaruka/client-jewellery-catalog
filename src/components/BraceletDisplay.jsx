import Image from "next/image";
import bracelet from "../../public/images/bracelet.jpg";
import braceletImg from "../../public/images/bracelets-img.png";

const BraceletDisplay = () => {
  return (
    <div className="bg-[#e1e1db] h-screen flex flex-col xl:justify-center items-center font-montserrat px-4 py-8">
      <h2 className="xl:text-2xl text-sm font-normal text-center mb-8">DIAMOND ATELIER</h2>
      <div className="grid grid-cols-3 xl:gap-6 gap-2 w-full max-w-5xl items-start">
        <div className="flex flex-col items-center bg-[#faf7f1] xl:p-6 p-2  w-full">
          <Image
            src={bracelet}
            alt="Emerald Bracelet"
            width={200}
            height={400}
            className="w-full max-w-xs h-full object-cover"
          />
          <p className="mt-3 xl:text-lg text-sm font-semibold text-center">Emerald Bracelet</p>
        </div>
        <div className="w-full h-full">
          <table className="w-full h-full bg-[#faf7f1] border border-[#e1e1db] rounded-lg shadow-md">
            <tbody>
              {["Diamond Weight", "Metal Type", "Metal Weight", "Price"].map((item, index) => (
                <tr key={index} className="border-b last:border-none border-[#e1e1db]">
                  <td className="p-3 font-medium border-r border-[#e1e1db] text-xs md:text-base text-black text-center">
                    {item}
                  </td>
                  <td className="p-3 w-1/2 text-sm xl:text-base text-gray-500"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-rows-2 gap-4 w-full">
          <div className="flex justify-center">
            <Image
              src={bracelet}
              alt="Bracelet Side View"
              width={160}
              height={160}
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={braceletImg}
              alt="Bracelet Top View"
              width={160}
              height={160}
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraceletDisplay;
