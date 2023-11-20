export default function Loading() {
    return (
        <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex sm:space-x-4 flex-col sm:flex-row pb-42">
            <div className="animate-pulse">
                <div className="bg-gray-200 rounded-md mb-4 h-48 w-48"></div>
                <div className="bg-gray-200 rounded-md mb-2.5 h-2 w-48"></div>
                <div className="bg-gray-200 rounded-md mb-2.5 h-2 w-44"></div>
            </div>
            <div className="hidden sm:inline-flex sm:space-x-4">
                <div className="animate-pulse">
                    <div className="bg-gray-200 rounded-md mb-4 h-48 w-48"></div>
                    <div className="bg-gray-200 rounded-md mb-2.5 h-2 w-48"></div>
                    <div className="bg-gray-200 rounded-md mb-2.5 h-2 w-44"></div>
                </div>
                <div className="animate-pulse">
                    <div className="bg-gray-200 rounded-md mb-4 h-48 w-48"></div>
                    <div className="bg-gray-200 rounded-md mb-2.5 h-2 w-48"></div>
                    <div className="bg-gray-200 rounded-md mb-2.5 h-2 w-44"></div>
                </div>
            </div>
        </div>
    );
}
