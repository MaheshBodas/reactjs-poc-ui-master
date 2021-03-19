import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Form, Table } from 'element-react';
import { viewAllTracksActions} from '../../_actions';
import './ViewTrackGrid.css';

import { ComposableContainer } from './../ComposableContainer/ComposableContainer'
import { ToggleContainer } from './../ToggleContainer/ToggleContainer'

// const ComposableContainer = React.lazy(() => import('./../ComposableContainer/ComposableContainer').then(module => ({ default: module.ComposableContainer })))
// const ToggleContainer = React.lazy(() => import('./../ToggleContainer/ToggleContainer').then(module => ({ default: module.ToggleContainer })))



const emptySelectTrackInstance = {}
const emptyColumnNames = []
class ViewTrackGrid extends Component {
    _isMounted = false
    constructor(props) {
        super(props);     
        console.log('constructor ViewTrackGrid')
        this.state = {
          isMounted: false      
        };         
    }
    
    componentDidMount() {
      console.log(this.props.user)
      this._isMounted = true
      this.props.getTracks()
    }
  
    componentWillUnmount() {
      this._isMounted = false
    }


    componentDidCatch(error, info) {
      console.log('componentDidCatch ' + error)                
    }    

    render() {
      const {type, message, tracksInstancesTable, tracksInstanceTableColumns } = this.props;      
      const errorInfo = {type: type, message: message}      
      const oTrackTableColumns = tracksInstanceTableColumns || emptyColumnNames
      console.log('tracksInstancesTable' + tracksInstancesTable) 
      return (
        <div>           
          <ComposableContainer showHeader={true}>
          {{
            header:(
              null  
            ),
            content: (
              <ToggleContainer loading={this.props.loading} shouldDisplayMain={this.props.shouldDisplayMain} 
                  showFooter={this.props.showFooter} hasError={this.props.hasError} showSuccess={this.props.showSuccessMsg}>
              {{
                warningmsg: (
                  <Form ref="warningform" labelPosition="left" style={{flex:1, align:'left', marginLeft:5}} model={emptySelectTrackInstance}>
                  <Layout.Row gutter="20">
                        <Layout.Col span="16">
                          <h4>Invalid Track Type Name or No Data found</h4>
                        </Layout.Col>                                        
                  </Layout.Row>
                </Form>
                ),              
                content: (               
                  <div className="ui-tabs ui-widget ui-widget-content ui-corner-all">    
                    { tracksInstancesTable && <Table 
                          style={{width: '100%'}}                          
                          columns={oTrackTableColumns} 
                          data={tracksInstancesTable}
                          height={400}
                     />
                    }                                       
                  </div>
                ),                
                errorInfo: errorInfo
              }}
            </ToggleContainer>
            )
          }}
          </ComposableContainer>
        </div>
      );      
    }
}

function mapStateToProps(state) {
    const { alert, authentication, viewalltracks } = state;        
    const { loggingIn } = authentication;
    const {type, message} = alert;
    const {tracksInstancesTable, tracksInstanceTableColumns, loading } = viewalltracks        

    let shouldDisplayMain = false    
    let showFooter = false    
    let hasError = false
    
    if(tracksInstancesTable && tracksInstancesTable.length > 0) {
      shouldDisplayMain = true   
      showFooter = true
    }

    if(type === 'alert-danger') {
      hasError = true
      console.log('This is an error')
    }    
    console.log('mapStateToProps View Tracks' + tracksInstancesTable + shouldDisplayMain)    
    return {      
      loggingIn,
      type,
      message,
      shouldDisplayMain,
      showFooter,
      tracksInstancesTable,
      tracksInstanceTableColumns,
      loading,
      hasError
    }    
}

function mapDispatchToProps(dispatch) {
    return {        
        getTracks: () => dispatch( viewAllTracksActions.getTracks() ),        
        resetAllTracks: () => dispatch(viewAllTracksActions.resetAllTracks())
    }
}

const connectedViewTrackGrid = connect(mapStateToProps , mapDispatchToProps)(ViewTrackGrid);
export { connectedViewTrackGrid as ViewTrackGrid }; 
