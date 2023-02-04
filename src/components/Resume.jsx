import styles from '../style';
import { resume } from '../assets';

const Resume = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        e.target.id === 'resume-container' ? onClose() : null
    };
    if (!visible) return null;

    return(
        <div id='resume-container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center text-white'>
            <div className='bg-white p-2 rounded flex flex-col  project-card'>
                <div className='flex flex-row items-center pb-2 z-50'>
                    <a href='https://drive.google.com/file/d/1OswYQFqDvQ-nHobOuDN7qQIGRvXI4YXm/view?usp=sharing' className={`${styles.filledButton} ml-1.5 py-2 px-4 text-[12px]`} target='_blank'>Download PDF</a>
                    <button onClick={onClose} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 mb-[5px] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="defaultModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <a href='https://drive.google.com/file/d/1vk_NasHpkabe7CTESfbTB2gKieoGnDko/view?usp=share_link' target='_blank' className=' mb-[5px] flex justify-center items-center'>
                    <img src={resume} alt="Steven Kebila's Resume" className='border-t md:max-h-[600px] sm:max-h-[600px] ss:max-h-[600px] h-[100vw] rounded' />
                </a>
            </div>
        </div>
    )
}

export default Resume