import React, { Component } from 'react';
import { Layout } from 'element-react';
import { ComposableContainer } from './../../_components/ComposableContainer/ComposableContainer'
import { ToggleContainer } from './../../_components//ToggleContainer/ToggleContainer'
import { connect } from 'react-redux';
import { authenticationActions } from '../../_actions';
import styles from './Dashboard.css'

export class Dashboard extends Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    console.log(this.props.user)
    this.props.getUserDetails(this.props.user);    
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { type, message, user, userRoles } = this.props
    const errorInfo = {type: type, message: message}    
    return (      
    <div>      
      { this._isMounted && <ComposableContainer showHeader={true}>
      {{
        header:(
          <div style={{height:'90px', border: '1px', solid: '#eee'}}>
            <div style={styles.dashboardLabel}>Hi, {user} </div>
            <div style={styles.dashboardLabel}>Roles: {userRoles}</div>
            <div style={styles.dashboardLabel}>This site is best viewed with latest Firefox or Chrome with 80% zoom.</div>
            <br/>
          </div>
        ),
        content: (
          <ToggleContainer loading={this.props.loading} shouldDisplayMain={true} 
              showFooter={false} hasError={this.props.hasError} showSuccess={false}>
          {{
            warningmsg: (
              null
            ),              
            content: (                                    
              <div style={{width:'90%', border: '1px', solid: '#eee'}}>                                
                <Layout.Row>
                  <Layout.Col span="24">
                    <h3>View All Tracks</h3>
                  </Layout.Col>
                </Layout.Row>                
                <br/>
                <Layout.Row>
                  <Layout.Col span="24">
                    <img src={'assets/img/avatars/viewalltrack.jpg'} className="img-fluid" alt="Create Risk Type" />                                      
                  </Layout.Col>
                </Layout.Row>                
                <br/>
                <Layout.Row>
                  <Layout.Col span="24" style={styles.helpTextLabel}>
                      Any User can view All Tracks Instance(s) Page will show Track name, Album, Composer, Duration, Price with other Fields in tabular format.
                  </Layout.Col>
                </Layout.Row>                                         
              </div>              
            ),                
            errorInfo: errorInfo
          }}
        </ToggleContainer>
        )
      }}
      </ComposableContainer>
      }
    </div>
    );
    //
  }
}

function mapStateToProps(state) {
  const { alert, authentication } = state;
  const { user, loggedIn, isAdmin, loading, userRoles } = authentication;
  const {type, message} = alert;
  let hasError = false  
  
  if(type === 'alert-danger') {
    hasError = true
    console.log('This is an error')
  }

  return {
      user,
      userRoles,
      loggedIn,
      type,
      message,      
      loading,
      isAdmin,
      hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
      // dispatching plain actions
      getUserDetails : (userName) => dispatch( authenticationActions.getUserDetails(userName))      
  }
}

const ConnectedDashboard = connect(mapStateToProps , mapDispatchToProps)(Dashboard);
export default ConnectedDashboard

