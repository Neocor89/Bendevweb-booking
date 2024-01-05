import BookingCard from '@/components/BookingCard';
import { MediumBookCard } from '@/components/MediumBookCard';
import SearchForm from '@/components/SearchForm';
import { destinations_data } from '@/data/trending';

export default function Home() {
  return (
    <main className="bg-[#003b95]">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-4xl md:text-5xl text-white">
          Discover your next Stay
        </h2>
        <h3 className="text-white py-5 text-left font-rubik">Search the Best low prices for your next Stay...</h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">

        <SearchForm />
      </section>

      <section className="max-w-7xl mx-auto mt-20 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">
            Trending destinations
          </h3>
          <p className="font-light">
            Most popular choices for global travellers
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll mb-12">
          {destinations_data.map((item) => (
            <div
              key={item.id}
              className="space-y-1 shrink-0 cursor-pointer">
              <img
                src={item.src}
                className='w-[400px] h-72 object-cover rounded-lg pb-2'
                alt={item.location}
              />
              <p className="font-bold">{item.title}</p>
              <p>{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* SECTION FOR DISPLAYING INFORMATION */}
        <section className="">
          <div className="">
      <BookingCard />
          </div>
          <h3 className="text-xl font-bold pt-5">
            Trending Villas
          </h3>
          <MediumBookCard />
        </section>
      </section>

    </main>
  )
}
