import {React,useState} from 'react'
import TitleSm from './TitleSm';
import ModalBox from './Modal/ModalBox';
import PdfReaderDocc from './PdfReaderDocc';

function SearchResults() {

  const [modalOpen,setModalOpen] = useState(false);

  const OpenModalBox = () => {
    setModalOpen(true)
  }

  return (
    <>
    <div className='search-results'>
        <div>
            <TitleSm name='Search Results'/>
            <div className='content-box' onClick={OpenModalBox}>
                <h4>Wisdom</h4>
                <p>I am your live wisdom assistant powered by AI! As I listen to the conversatioin I will provide suggestions. </p>
            </div>
            <div className='content-box'>
                <h4>Wisdom</h4>
                <p>I am your live wisdom assistant powered by AI! As I listen to the conversatioin I will provide suggestions. </p>
            </div>
        </div>
    </div>
    <ModalBox isHeight Header={true} CloseModal={() => setModalOpen(false)} isOpen={modalOpen}>
    
    <PdfReaderDocc/>
  
    </ModalBox>
    </>
  )
}



export default SearchResults