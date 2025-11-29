function ZodiacSign({ name, iconName, image }) {
  // Generate Iconify API URL for the icon with white color
  const iconUrl = iconName 
    ? `https://api.iconify.design/${iconName}.svg?color=%23ffffff&width=56&height=56`
    : null;

  return (
    <div className=" max-w-[1200px] mx-auto flex flex-col items-center justify-center cursor-pointer">
      {image ? (
        <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#481299] to-[#0C4292] flex items-center justify-center mb-4 shadow-sm">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 object-contain filter brightness-0 invert"
          />
        </div>
      ) : iconUrl ? (
        <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#481299] to-[#0C4292] flex items-center justify-center mb-4 shadow-sm">
          <img 
            src={iconUrl} 
            alt={name} 
            className="w-14 h-14 object-contain"
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#481299] to-[#0C4292] flex items-center justify-center mb-4 shadow-sm">
          <span className="text-3xl text-white font-bold">
            {name.charAt(0)}
          </span>
        </div>
      )}
      <span className="text-[#0C4292] font-semibold text-sm text-center">
        {name}
      </span>
    </div>
  );
}

export default ZodiacSign;

