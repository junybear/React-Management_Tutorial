import './App.css';
import { Component } from 'react';
import Cumtomer from './components/Customer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const styles = {
  root: {
  width: "100%",
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  };

const customer = [
{
  'id' : 1
  , 'image' : 'https://placeimg.com/64/64/1'
  , 'name' : '홍길동'
  , 'birthday' : '961122'
  , 'gender' : '남자'
  , 'job' : '대학생'
},
{
  'id' : 2
  , 'image' : 'https://placeimg.com/64/64/2'
  , 'name' : '서경준'
  , 'birthday' : '900828'
  , 'gender' : '남자'
  , 'job' : '개발자'
},
{
  'id' : 3
  , 'image' : 'https://placeimg.com/64/64/3'
  , 'name' : '김곰준'
  , 'birthday' : '901211'
  , 'gender' : '여자'
  , 'job' : '디자이너'
}

]

class App extends Component{
  render(){
    const {classes} = this.props;
    return(
      <Paper sx={{overflowX: "auto"}}>
        <Table stickyHeader sx={{maxWidth: '1080px', minWidth: '1080px'}}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customer.map(c => { return( <Cumtomer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); }) }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default App;
