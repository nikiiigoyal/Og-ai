import Hero from "../components/home/Hero";

export default function HomePage() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 block w-full h-full object-cover"
        >
          <source src="/og background video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       < Hero />
      </div>
    </>
  );
}
