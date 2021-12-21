import Image from "next/image";

export const ImageComponent = () => (
  <Image
    style={{ backgroundColor: "pink" }}
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
