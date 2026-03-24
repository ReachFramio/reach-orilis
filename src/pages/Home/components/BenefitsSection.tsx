import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Premium Catalog & Lookbook Design",
      description:
        "Create high-quality catalogs, brochures, and lookbooks with clean layouts, strong typography, and visually appealing product presentations that elevate your furniture collections."
    },
    {
      icon: Users,
      title: "Consistent Layout Across Collections",
      description:
        "Use templates, master pages, and styles to maintain a uniform structure across large product ranges, making catalogs easy to navigate and understand."
    },
    {
      icon: TrendingUp,
      title: "Stronger Brand Storytelling",
      description:
        "Combine images, text, and layouts to present collections as complete stories instead of just product listings, improving customer engagement and brand perception."
    },
    {
      icon: Star,
      title: "Faster Catalog Updates",
      description:
        "Quickly update product details, pricing, and visuals using reusable templates without redesigning documents, saving time for seasonal launches and updates."
    },
    {
      icon: Clock,
      title: "Print & Digital Ready Output",
      description:
        "Export documents as high-quality print-ready PDFs or optimized digital files for websites, emails, and presentations while maintaining visual consistency."
    },
    {
      icon: Users,
      title: "Scalable Design Workflow",
      description:
        "Build reusable template libraries that allow teams and partners to create consistent, on-brand documents efficiently as your business grows."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-peach-600">
          Benefits of REACH Orilis
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Layout and DTP Software for Furniture Design
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-peach-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-peach-400 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;