const GoogleMap = () => {
  return (
    <div className=" container mx-auto px-6 sm:px-12 py-12  h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.779747214664!2d72.57136241504832!3d23.02250598494456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f2c39c1c59%3A0x3f7f9a8bb5a73a2c!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1695023456789"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        className="rounded-md"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
