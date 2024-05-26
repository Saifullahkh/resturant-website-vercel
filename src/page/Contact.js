import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <Layout>
      <Box sx={{my: 8, ml: 5, '& h4': {
        fontWeight: 'bold',
        mb: 2, '@media (max-width: 600px)': {
          fontSize: '1.4rem'
        }
      }}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo explicabo vero exercitationem delectus quas quos quo temporibus! Laborum deleniti nobis, nisi quibusdam quasi, fugiat culpa necessitatibus facere ea veritatis placeat!
        </p>
      </Box>
      <Box sx={{m:3, width: '600px', ml: 5, '@media (max-width: 600px)': {
        width: '300px'
      } }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact tabel'>
            <TableHead sx={{bgcolor: 'black'}}>
              <TableRow>
                <TableCell sx={{color: 'white', textAlign: 'center', fontSize: 25}}>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color: 'red', pt: 1}} /> 0925-670165
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{color: 'green', pt: 1}} /> atifullahkhan47@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{color: 'blue', pt: 1}} /> 0335-9199919
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
