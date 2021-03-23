import React, { Component } from "react";
import fetchService from "./services/apiService"
import Searchbar from "./components/Searchbar";
import ImageGallery from"./components/ImageGallery"
import Button from "./components/Button";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Modal from "./components/Modal";


class App extends Component{
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    modalImageUrl: "",
    modalImageAlt: ""
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    
    }
  }

  
  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      pictures: [],
      currentPage: 1,
      error: null
    })
   }

  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({isLoading: true});

   fetchService(options)
      .then(picture => {
      
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...picture],
          currentPage: prevState.currentPage+1
          
        }))
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }).catch(error=> this.setState({error})).finally(()=>this.setState({isLoading:false}))
  }

  handleImage = (event) => {
    if (event.target.nodeName !== 'IMG') {
      return
    }
    this.setState({
      modalImageUrl: event.target.dataset.image,
      modalImageAlt: event.target.alt,
       showModal: true
    })
  }

  onCloseModal = (event) => {
    this.setState({
      modalImageUrl: '',
      modalImageAlt: '',
      showModal: false
    })
  }
    

  render() {
    const { pictures, isLoading, error, showModal, modalImageUrl, modalImageAlt} = this.state;
    const shouldShowLoadBtn = pictures.length > 0 && !isLoading;
   return (
     <>
       <Searchbar onSubmit={this.onChangeQuery} />
       {error && <h1>Something went wrong...try again later!</h1>}
       <ImageGallery pictures={pictures} onClick={this.handleImage}/>
       {isLoading && <Loader type="Oval" color="#3f51b5" height={80} width={80} radius={100} timeout={7000} />}
       {shouldShowLoadBtn && <Button text="Load more" fetchPictures={this.fetchPictures} />}
       {showModal && <Modal onClose={this.onCloseModal}><img src={modalImageUrl} alt={modalImageAlt}/></Modal>}
      </>
  )
  }
}
export default App;
