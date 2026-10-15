import AppCard from "@/components/app-card";
import { categoryOptions } from "@/collections/shared";
import { getServices, WHATSAPP_URL } from "@/lib/content";

export default async function AppList() {
  const services = await getServices();

  // Satu section per kategori, mengikuti urutan `categoryOptions`
  const sections = categoryOptions
    .map((category) => ({
      ...category,
      services: services.filter((service) => service.category === category.value),
    }))
    .filter((section) => section.services.length > 0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Categories */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.value}>
                <div className="mb-5">
                  <h2 className="truncate text-xl font-bold">{section.label}</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                  {section.services.map((service) => (
                    <div key={service.id} className="group">
                      <AppCard
                        app={{ name: service.name, link: service.link || WHATSAPP_URL }}
                      >
                        {service.description}
                      </AppCard>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
