import React from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlzMypageNav from "../PlzMypagenav";


const TableBox = styled.div`
  padding-left: 500px;  
  padding-right: 100px;
  padding-top: 50px;
`;

const TextTitle = styled.div`
  padding-top:10px;
  padding-left:300px;
  font-weight: bold;
  font-size:25px;
  text-align: center;
`;

const useStyles = makeStyles({
    table: {
      Width: 400,
    },
  });
  
  function createData(date,name, teacher, check) {
    return {date,name, teacher, check};
  }
  
  const rows = [
    createData('2020.04.05', '노인과 ~를 위한 ~', '김아무개', 'O'),
    createData('2020.05.15', '아동과 ~를 위한 ~', '김아무개', 'O'),
    createData('2020.05.30', '노인과 ~를 위한 ~', '김아무개', 'O'),
    createData('2020.06.12', '노인과 ~를 위한 ~', '김아무개', 'O'),
    createData('2020.07.22', '노인과 ~를 위한 ~', '김아무개', 'O'),
  ];
  
  export default function SimpleTable() {
    const classes = useStyles();
      
    return (
        
        
    <>
    <PlzMypageNav />
    <TextTitle>
            교육 이수 내역
    </TextTitle>
    <TableBox>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">날짜</TableCell>
              <TableCell align="right">강의명&nbsp;</TableCell>
              <TableCell align="right">강사&nbsp;</TableCell>
              <TableCell align="right">교육 이수 여부 확인&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.teacher}</TableCell>
                <TableCell align="right">{row.check}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>        
      </TableContainer>
    </TableBox>
  </>
    );
  }
  
