import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "A supporter from Northern Nevada, inspired by their own journey rediscovering photography after years in the service industry, contributed to LWBL's initial quest grant pool. Their donation helped fund a mini-quest for underrepresented ethnic photographers, enabling 5 participants to challenge their visual arts skills. 'Seeing these creators shine reminded me of my passion—LWBL is uplifting communities one story at a time,' they shared. This gift, processed securely, aligns with our mission without revealing personal details",
    donorId: "DNR-UULB17695",
  },
  {
    id: 2,
    quote:
      "A prolific sculptor & supporter from Southern California, contributed to LWBL's initial sculpture grant pool. Their donation is helping fund a grant for sculptural supplies. Their story was 'I spent many decades in the medical services industry, collecting art books and going to the many galleries in my area. Never thinking I could be an artist. Then, my family and friends began hinting that I should try my hand at sculpting. This is what I see in the LWBL’s mission and commitment to inspire people to follow their passions!",
    donorId: "DNR-RPJA4542",
  },
  {
    id: 3,
    quote:
      "A supporter from Northern California, contributed to LWBL's initial quest grant pool. Their donation helped fund the awards for the winners of our Aug 2025 Quest ‘Black Light’.  Their story was 'LWBL has motivated me to see photographic stories as a way of expressing ourselves.  Different image exposure can give you the stark nature of reality or the softer hue of what you hope to be. The quest challenges help create a different perspective for imagining an image’s appearance on “film”. Pushing a photographer’s boundaries only enhances the experience you can have with your art.",
    donorId: "DNR-WLNW9700",
  },
  {
    id: 4,
    quote:
      "A supporter from Northern California, contributed to LWBL's initial quest grant pool. Their donation helped fund the awards for the winners of our Aug 2025 Quest ‘Black Light’.  Their story was 'LWBL has motivated me to see photographic stories as a way of expressing ourselves.  Different image exposure can give you the stark nature of reality or the softer hue of what you hope to be. The quest challenges help create a different perspective for imagining an image’s appearance on “film”. Pushing a photographer’s boundaries only enhances the experience you can have with your art.",
    donorId: "DNR-WLNW9700",
  },
];

function Community() {
  return (
    <section className="bg-[#f7f5f2] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl lg:flex lg:gap-16">
        {/* Left column – cards */}
        <div className="lg:w-2/3">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="flex h-full flex-col rounded-2xl bg-white p-6 text-[0.72rem] leading-relaxed shadow-md"
              >
                <p className="mb-4 text-[16px] text-start font-outfit">{item.quote}</p>
                <p className="mt-auto font-semibold tracking-[0.18em] text-[16px] text-start text-neutral-900">
                  <span className="font-bold">DONOR – </span>
                  {item.donorId}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Right column – heading + copy */}
        <div className="mt-10 flex flex-col justify-center lg:mt-0 lg:w-1/3">
          <p className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-neutral-700">
            Real Voices, Real Impact
          </p>

          <h2 className="mb-6 font-cinzel  text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-[2.6rem]">
            <span className="block">What Our</span>
            <span className="block">Community Says</span>
          </h2>

          <p className="mb-3 max-w-md text-sm leading-7 font-outfit text-neutral-700">
            Creativity thrives because of the people who make up our community.
            From aspiring artists to dedicated patrons, everyone finds
            inspiration, support, and growth here.
          </p>
          <p className="mb-8 max-w-md text-sm leading-7 text-neutral-700">
            Hear from those who have walked the journey with us.
          </p>

          <button
            type="button"
            className="inline-flex w-max items-center rounded-full border border-neutral-900 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Follow Us On X
          </button>
        </div>
      </div>
    </section>
  );
}

export default Community;
