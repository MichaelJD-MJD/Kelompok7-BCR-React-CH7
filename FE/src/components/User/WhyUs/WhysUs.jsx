import completeImg from "../../../assets/WhyUs-Icon/icon_complete.png";
import _24hrsImg from "../../../assets/WhyUs-Icon/icon_24hrs.png";
import priceImg from "../../../assets/WhyUs-Icon/icon_price.png";
import ProfessionalImg from "../../../assets/WhyUs-Icon/icon_professional.png";

const WhyUs = () => {
  const features = [
    {
      icon: <img src={completeImg} alt="" />,
      title: "Mobil Lengkap",
      description:
        "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.",
    },
    {
      icon: <img src={priceImg} alt="" />,
      title: "Harga Murah",
      description:
        "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.",
    },
    {
      icon: <img src={_24hrsImg} alt="" />,
      title: "Layanan 24 Jam",
      description:
        "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.",
    },
    {
      icon: <img src={ProfessionalImg} alt="" />,
      title: "Sopir Profesional",
      description:
        "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu.",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto" id="whyus">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Us?</h2>
      <p className="text-gray-600 mb-8">
        Mengapa harus pilih Binar Car Rental?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-left p-6 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-left">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
