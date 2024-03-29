const CustomModal = ({ setOpenModal, children, heading }) => {
    return (
        <div className='h-full' >
            <div class="fixed w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 flex justify-center items-center">
                <div class="relative w-full w-6/12  flex flex items-center justify-center">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            onClick={() => setOpenModal(false)}
                            type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">{heading && heading}</h3>
                            <div>
                                {children}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CustomModal;