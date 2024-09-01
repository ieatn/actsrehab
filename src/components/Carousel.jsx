
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousel = () => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
        <div className="container px-4 md:px-6 mx-auto">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide className="flex flex-col items-center justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Welcome to ACTS Counseling
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  We provide compassionate, personalized counseling services to help you navigate life's challenges
                  and achieve greater well-being.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Schedule an Appointment
              </Link>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="Counseling"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide className="flex flex-col items-center justify-center space-y-4 text-primary-foreground">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Our Services
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Explore our diverse range of counseling services tailored to meet your individual needs.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    );
  };
  
  export default Carousel;