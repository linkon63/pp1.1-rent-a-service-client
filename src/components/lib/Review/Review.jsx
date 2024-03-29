import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div>
            <h1 class="mb-10 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Customer <span class="text-blue-600 dark:text-blue-500">Review</span>s</h1>
            {/* <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style> */}
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
                            <h3 className="text-xl mb-5 font-light">Drive with Ease: Rent a Car for Your Next Adventure.</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"
                                        </span>I had a great experience renting a car from this company. The vehicle was clean and well-maintained, and the staff was friendly and helpful<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>"The rental process was fast and easy, and the prices were very reasonable. I appreciated the flexibility of being able to pick up and drop off the car at different locations."<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>"I was impressed with the variety of cars available to rent, from economy to luxury. The staff was knowledgeable and helped me select the perfect car for my needs."<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1"></span>"The rental car was exactly what I needed for my trip. It was clean, comfortable, and drove smoothly. I would definitely rent from this company again."<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 md:w-1/3">
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I had a minor issue with the car during my rental, but the customer service team was quick to respond and resolved the problem right away. I appreciated their prompt and professional service."<span className="text-lg leading-none italic font-bold text-gray-400 ml-1"></span></p>
                                    </div>
                                </div>
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>The rental car was exactly what I needed for my trip. It was clean, comfortable, and drove smoothly. I would definitely rent from this company again.!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="mb-10 mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Down<span class="text-blue-600 dark:text-blue-500">load</span> our service</h1>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50 mt-5 mb-5">
                <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                    <div className="flex flex-col justify-center lg:text-left">
                        <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-400">No Car? No Problem! Rent a Car for Your Next Outing</p>
                        <h1 className="py-2 text-3xl font-medium leading-tight title-font">Rent a Car and Enjoy the Flexibility to Go Wherever You Want</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                        <button className="inline-flex items-center px-6 py-3 rounded-lg dark:bg-violet-400 dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-7 h-7 dark:text-gray-900">
                                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
                            </svg>
                            <span className="flex flex-col items-start ml-4 leading-none">
                                <span className="mb-1 text-xs">GET IT ON</span>
                                <span className="font-semibold title-font">Google Play</span>
                            </span>
                        </button>
                        <button className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-400 dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="fill-current w-7 h-7 dark:text-gray-900">
                                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                            </svg>
                            <span className="flex flex-col items-start ml-4 leading-none">
                                <span className="mb-1 text-xs">Download on the</span>
                                <span className="font-semibold title-font">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Review;