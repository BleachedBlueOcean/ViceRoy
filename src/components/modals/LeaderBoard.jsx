import React, {useState, useEffect} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import controllers from '../../backend/controllers'

const LeaderBoard = ({dialogOpen, closeDialog, page}) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await controllers.getAllUsers();
        const sortedData = data.sort((a, b) => {
          return (b.availableCash - a.availableCash);
        })
          setUserList(sortedData)
      } catch(error) {
        console.log('Error retrieving data: ', error);
      }
    };
    fetchData();
    // let intervalId = setInterval(fetchData, 10000);
    // return () => clearInterval(intervalId)
  }, [])

  return (
    <>
    <Dialog sx={{maxHeight: '600px', marginTop: '5%'}} open={dialogOpen} onClose={closeDialog}>
      <DialogTitle>Leaderboard</DialogTitle>
      {/* <IconButton >
        Replace with your close icon
        <CloseIcon />
      </IconButton> */}
      <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Total Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* map through data creating a row with each cell  */}
              {userList.map((row, index) => {
                return (<TableRow key={index}>
                  <TableCell>{row.firstName + ' ' + row.lastName}</TableCell>
                  <TableCell>{(row.availableCash)?.toFixed(2)
                  }</TableCell>
                </TableRow>)
              })}
            </TableBody>
          </Table>
      </DialogContent>
    </Dialog>
    </>
  )
}

export default LeaderBoard;