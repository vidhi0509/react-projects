// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center bg-pink-200 p-2 pb-1 flex-wrap justify-center absolute min-w-full bottom-0 left-0">
      copyright © 2024 all rights reserved by FoodVilla.
    </div>
  );
};

export default Footer;
