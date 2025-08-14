import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

const patients = [img1, img2, img3, img4, img5, img6, img7, img8];

const SmileTransformations = () => {
  return (
    <div className="bg-black py-10 px-4">
      <h2 className="text-white text-center text-xl md:text-3xl font-semibold mb-10 tracking-wide p-10">
        SMILE TRANSFORMATIONS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-12 gap-4 max-w-7xl mx-auto">
        {patients.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-md">
            <img
              src={img}
              alt={`Patient ${index + 1}`}
              className="w-full h-auto object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default SmileTransformations;
