import { Card } from "@/components/ui/card";
import companyLogo from "./../Images/Aura Logo-01.png";
import Wimukthi from "./../Images/wimukthi.jpg";
import Prabhath from "./../Images/prabath.jpg";
import Yasiru from "./../Images/yasiru.jpg";
import Sajitha from "./../Images/sajitha.jpg";
import Dinujaya from "./../Images/Dinujaya.jpg";
import Lasith from "./../Images/Lasith.jpg";

const AboutUs = () => {
  return (
    <section className="py-30 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About + Logo */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-24">
          {/* Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-1 w-14 bg-gradient-to-r from-gray-800 to-blue-600 rounded-full"></div>
                <div className="h-0.5 w-6 bg-blue-600 rounded-full"></div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800">
                About <span className="text-blue-600">Our Company</span>
              </h2>
              <p className="text-lg text-gray-600">
                We are a leading technology company dedicated to delivering
                innovative solutions that transform businesses and empower
                organizations to achieve their goals. With over a decade of
                experience, we combine cutting-edge technology with deep
                industry expertise.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Location",
                  text: "123 Innovation Drive, Tech Valley, California 94105, USA",
                },
                {
                  title: "What We Do",
                  text: "We specialize in enterprise software development, cloud solutions, AI/ML implementations, and digital transformation consulting.",
                },
                {
                  title: "Educational Excellence",
                  text: "Our team holds advanced degrees from top institutions including MIT, Stanford, and Harvard Business School, with certifications in emerging technologies.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <Card className="relative p-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <img
                  src={companyLogo.src}
                  alt="Company Logo"
                  className="w-64 h-64 object-contain"
                />
              </Card>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Leadership Team</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                image: Wimukthi,
                name: "Sarah Johnson",
                position: "Chief Executive Officer",
                description:
                  "MBA from Harvard Business School, 15+ years in tech leadership",
              },
              {
                image: Sajitha,
                name: "Michael Chen",
                position: "Chief Technology Officer",
                description:
                  "PhD in Computer Science from MIT, Expert in AI and Cloud Architecture",
              },
              {
                image: Yasiru,
                name: "Emily Rodriguez",
                position: "VP of Operations",
                description:
                  "MS in Operations Management, 12+ years optimizing business processes",
              },
              {
                image: Prabhath,
                name: "David Smith",
                position: "Chief Financial Officer",
                description:
                  "CPA with 20 years in financial strategy and risk management",
              },
              {
                image: Dinujaya,
                name: "Lisa Brown",
                position: "VP of Marketing",
                description:
                  "MBA in Marketing, 10+ years in digital marketing and brand strategy",
              },
              {
                image: Lasith,
                name: "James Wilson",
                position: "Chief Product Officer",
                description:
                  "MS in Product Management, 15+ years in product development and innovation",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm group hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-blue-600/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300"></div>
                  <img
                    src={member.image.src}
                    alt={member.name}
                    className="relative w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-0 bg-gradient-to-br from-blue-600 to-blue-500 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To empower businesses through innovative technology solutions
                that drive growth, efficiency, and digital transformation while
                maintaining the highest standards of quality and customer
                satisfaction.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-0 bg-gradient-to-br from-gray-800 to-gray-600 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To be the global leader in technology consulting, recognized for
                our innovative solutions, exceptional talent, and commitment to
                creating a more connected and efficient world.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
