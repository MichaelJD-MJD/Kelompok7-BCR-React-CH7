import { createLazyFileRoute, Link } from "@tanstack/react-router";
import CardCarDetail from "../../components/User/CardCar/CardCarDetail";
import Accordian, { AccordianItem } from "../../components/User/Accordian";
import Footer from "../../components/User/Footer/Footer";

export const Route = createLazyFileRoute("/searchCar/$id")({
  component: DetailMobil,
});

function DetailMobil() {
  const { id } = Route.useParams();

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Background Header */}
      <div className="bg-[#F1F3FF] flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Detail Mobil - ID: {id}
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-8 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="p-6 bg-white border rounded-lg shadow-md w-full lg:w-2/3">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Tentang Paket
          </h2>
          {/* Include Section */}
          <section className="mb-6">
            <h3 className="font-medium mb-2">Include</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </section>
          {/* Exclude Section */}
          <section className="mb-6">
            <h3 className="font-medium mb-2">Exclude</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </section>
          {/* Accordion */}
          <Accordian>
            <AccordianItem value={1} trigger="Refund, Reschedule, Overtime">
              <ul className="list-disc text-gray-600">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </AccordianItem>
          </Accordian>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          <CardCarDetail
            className="border p-4 bg-white rounded-lg shadow-md"
            id={id}
          />
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-8 text-right">
        <Link
          to={"/searchCar"}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Kembali ke Pencarian
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DetailMobil;
