import Image from "next/image";

function About() {
  return (
    <div className="h-screen">
      <div className="absolute -z-10 w-full">
        <Image
          className="w-full h-screen  "
          src={require("../../../public/assets/picutres/bg2.jpg")}
          alt="background Image"
          width={500}
          height={500}
        />
      </div>
      <div className="p-10 h-3 w-1/1 md:w-1/2 lg:w-1/2">
        <h1 className="about-heading">
          This is about section
        </h1>
        <p className="text-justify">
          {`Creating a web page is like building a digital home on the internet.
          It's where design meets functionality, and where content comes to life
          for users to explore. Every web page is crafted with a blend of code
          and creativity, bringing together elements like text, images, and
          interactive features to deliver a seamless user experience.`}
        </p>
      </div>
    </div>
  );
}
export default About;
