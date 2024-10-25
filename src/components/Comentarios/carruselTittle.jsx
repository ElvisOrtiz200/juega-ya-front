
export default function TitleCarrusel(){
    return (
        <div>
        <h1 className="text-2xl font-semibold text-center text-white  capitalize lg:text-3xl dark:text-white mt-12">
          Desliza y Descrube lo que Tenemos para ti...
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        </div>
        
    );
}