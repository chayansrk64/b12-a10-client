import React from "react";

const heroes = [
  {
    id: 1,
    name: "Ariana Sultana",
    role: "Rescued Bella the Labrador",
    image: "https://i.ibb.co/X3SpFSP/woman-with-dog.jpg",
    story:
      "Ariana adopted Bella after she was found abandoned. Now they share morning runs and endless cuddles.",
  },
  {
    id: 2,
    name: "Nayem Rahman",
    role: "Fostered 12 Street Cats",
    image: "https://i.ibb.co/9gS0s2Q/man-with-cat.jpg",
    story:
      "Nayem opened his heart and home to stray cats, ensuring they find love, safety, and a permanent home.",
  },
  {
    id: 3,
    name: "Sadia Akter",
    role: "Volunteer Caregiver",
    image: "https://i.ibb.co/W3McvZb/woman-with-puppy.jpg",
    story:
      "Sadia helps groom and feed rescued dogs every weekend — spreading compassion one paw at a time.",
  },
  {
    id: 4,
    name: "Rafiul Hasan",
    role: "Adopted Max the German Shepherd",
    image: "https://i.ibb.co/XkCNZMh/man-with-dog2.jpg",
    story:
      "Rafiul gave Max a new beginning after a tough past — they’re now inseparable best friends.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-16 px-6 bg-linear-to-br from-purple-50 to-pink-50">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-0.5 w-10 bg-pink-500 rounded"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our <span className="text-pink-600">Pet Heroes</span>
          </h2>
          <span className="h-0.5 w-10 bg-pink-500 rounded"></span>
        </div>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          These amazing humans chose adoption and rescue — giving countless pets
          a chance to live, love, and thrive again. 🐾
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-60 object-cover hover:scale-105 transition"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {hero.name}
              </h3>
              <p className="text-pink-600 text-sm font-medium mb-3">
                {hero.role}
              </p>
              <p className="text-gray-600 text-sm">{hero.story}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetHeroes;
