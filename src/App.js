import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";
import AnimatedModal from "./components/animated-modal.component";
import {MainCardContainer,Container,ResultCardContainer,SearchBarContainer} from './components/ContainerComponents';
import {ResultsRow,EmptyRow,HeaderRow} from './components/SectionComponents';
import {APP_DEV_BASE_URL} from './configs/apiconfig';



/* <-----  Comments App.js ------>
  
  App is Fired From Here - binded listings data, search values to constructor
  Binded Refresh Listings, Search Patient, Delete to pass as parameters to child components
  Add Patient is an Animated Modal that handles form submit imported from ./components

  Search happens onChange of search field and updates the listings without refreshing the page
  Animation executes on Add Patient Interaction

  UI Components used are in SectionComponents,ContainerComponents,ButtonComponents

  Need to move Animated Modal to different folder for animated modals

  */

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      search_value:'',
      value:'',
    };
    
    this.refreshListState = this.refreshListState.bind(this);
    this.searchPatient = this.searchPatient.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
    
  }

async refreshListState(){
  //To refresh listings on page - passed as parameter to animated modal so it fires after adding Patient.
    const response = await axios.get(APP_DEV_BASE_URL + "listings");
    const json = await response.data;
    this.setState({ data: json });
    window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", "/listings");

}

  async componentDidMount() {
//fires on page load
    const response = await axios.get(APP_DEV_BASE_URL + "listings");
    const json = await response.data;
    this.setState({ data: json });
  }

async searchPatient(newSearchString){
//Search function - Updates search result on change of search value field - used Email Regex
    this.setState({value: newSearchString});
    const response = await axios.get(APP_DEV_BASE_URL + "listings");
    const json = await response.data;
    this.setState({ data: json});
    const regex = new RegExp(newSearchString, 'gi');
    const search_filter = this.state.data.filter(
      record => record.email.match(regex)
    );
    this.setState({ data: search_filter });
  }

async handleDelete(listing_id){
 //Deletes record from database by making async axios call.
  const search_filter = this.state.data.filter(
    record => {
        return record._id !== listing_id.toString();
      }
    );
  this.setState({ data: search_filter });
  await axios.delete(APP_DEV_BASE_URL +`listings/delete/${listing_id}`);
}

  render() {
    //renders the app
    const result_length = this.state.data.length;
    return (
      
      <div className="app" data-testid="content">
            <Container>
                <MainCardContainer>
                    <div className = "titlePatient">Patients List</div>
                    <hr style={{margin:'1em'}}></hr>
                    <div className="two-grid-row">
                    <div className="two-grid-column">
                    <SearchBarContainer>
                      <SearchBar
                      value={this.state.value}
                      onChange={(newSearchstring) => this.searchPatient(newSearchstring)}
                      /*onRequestSearch={() => this.searchPatient(this.state.value)}*/
                      autoFocus
                    />
                  </SearchBarContainer>
                    </div>
                    <div className="two-grid-column" style={{textAlign:"right",paddingRight:"2em"}}>

                    <AnimatedModal refreshListState = {this.refreshListState} />


                    </div>
                  </div>
                      <ResultCardContainer>

                    <HeaderRow />
                    <hr></hr> 
                    {/* 
                      This section renders empty table result if there are no records to show on Search vs loading the searched listings only 
                      Each Result Row has the Delete button to which arguments and parent class function is passed to for executopm handleDelete
                      */}
                    <div className="results_container" >
                      
                    {
                    this.state.data.map((listing) => ( 
                  <div key={listing._id}> 

                      {this.state.data.length ? (  

                    <ResultsRow styles_result={{"id":listing._id,"email":listing.email}} handleDelete = {this.handleDelete} />
                      ): (
                        <EmptyRow />
                      )}

                      </div>

                  ))
                    

                  }

                  <div>
                        {result_length ? (
                  <div></div>
                        ) : (
                          <EmptyRow />
                        )}
                      </div>

                  </div> 

                      </ResultCardContainer>
  </MainCardContainer>
  </Container>

      </div>
    );
  }
}

export default App;
