export default function Loading() {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-12 h-12 border-2 border-gray-200 border-t-[#104D7E] rounded-full animate-spin"
        style={{ 
          animationDuration: '0.8s',
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      ></div>
    </div>
  );
}

