import React,{useEffect,useState,Fragment} from 'react';
import {connect} from 'react-redux'
import * as actions from "../actions/postMessage"
import { Grid, List, Paper,Typography,withStyles,ListItem,ListItemText,Divider, Button } from '@material-ui/core';
import PostMessageForm from './PostMessageForm';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import ButterToast,{Cinnamon} from "butter-toast"; 
import {DeleteSweep} from "@material-ui/icons"

const styles = theme =>({
  paper:{
    margin: theme.spacing(3),
    padding: theme.spacing(2)
    // spacing 1 = 8 px
  },
  smMargin:{
    margin:theme.spacing(1)
  },
  actionDiv:{
    textAlign:"center"
  }
})

// props.classes.paper

const PostMessages = ({classes, ...props}) => {
  //  const {classes, ...props}=props
  // const [x,setX] =useState(0)

  const [currentId,setCurrentId] = useState(0)
  


  // setX(5)

  useEffect(()=>{props.fetchAllPostMessages() },[])
  // if we pass []empty it is simlar to CompountDidMount in class based compoent


  const onDelete = id =>{
    const onSuccess =()=> {
         
      // window.alert("submitted successfull")
      ButterToast.raise({
          content:<Cinnamon.Crisp title="Post Box"
          content="deleted successfully"
          scheme={Cinnamon.Crisp.SCHEME_PURPLE}
          icon={<DeleteSweep/>}
          />
      })
  
  }
    if (window.confirm('Are you sure to delete this record'))
        props.deletePostMessage(id,onSuccess)

  }


    return (
        <Grid container>
         <Grid item xs={5}>
           <Paper className={classes.paper}>
             <PostMessageForm {...{currentId,setCurrentId}}/>
           </Paper>

          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              <List>
                {
                props.postMessageList.map((record,index)=>{
                  return(
                    <Fragment key={index}>
                      <ListItem>
                        <ListItemText>
                           <Typography variant="h5">
                             {record.title}
                           </Typography>
                           <div>
                             {record.message}
                           </div>

                           <div className={classes.actionDiv}>
                           <Button variant="contained" color="primary" size="small"
                             className={classes.smMargin}
                             onClick={()=>setCurrentId(record._id)}>
                               Edit
                             </Button>
                             <Button variant="contained" color="secondary" size="small"
                              className={classes.smMargin}
                              onClick={()=>onDelete(record._id)}>
                               Delete
                             </Button>
                           </div>
                             
                        </ListItemText>
                      </ListItem>
                      <Divider component="li" />
                    </Fragment>
                    // ul div li
                  )
                }) 
                }
              </List>
            </Paper>
           </Grid>
        </Grid>
      );
}

const mapStateProps = state =>({
   postMessageList:state.postMessage.list
})

const mapActionToProps ={
  fetchAllPostMessages:actions.fetchAll,
  deletePostMessage:actions.Delete
}
// props.fetchAllPostMessages
 
export default connect(mapStateProps,mapActionToProps)(withStyles(styles)(PostMessages));
