import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
      <Box sx={{
        my: 13,
        p: 3,
        textAlign: 'center',
        '& h4': {
          fontSize: '2rem',
          fontWeight: 'bold',
          my: 2
        },
        '& p': {
          textAlign: 'justify'
        },
        '@media (max-width: 600px)': {
          mt: 0,
          '& h4': {
            fontSize: '1.3rem'
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome to My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime numquam minus saepe aut! In et suscipit soluta corrupti fuga enim tempora culpa est quaerat ducimus, sequi at laudantium veniam. Harum corporis ducimus assumenda? Ducimus minima recusandae repellendus nemo blanditiis deserunt exercitationem ea explicabo cumque cupiditate beatae suscipit nesciunt commodi eum dicta pariatur, ut reprehenderit voluptas quos totam! Dolor deleniti inventore quod nihil dignissimos, pariatur repellat? Dignissimos unde, quis sequi molestiae exercitationem non. Modi, excepturi ut perferendis quidem nam reiciendis soluta quia quae nesciunt eaque suscipit rerum delectus consequuntur ipsa, illum alias laborum voluptatem id voluptates itaque quas deleniti vitae!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod maxime numquam minus saepe aut! In et suscipit soluta corrupti fuga enim tempora culpa est quaerat ducimus, sequi at laudantium veniam. Harum corporis ducimus assumenda? Ducimus minima recusandae repellendus nemo blanditiis deserunt exercitationem ea explicabo cumque cupiditate beatae suscipit nesciunt commodi eum dicta pariatur, ut reprehenderit voluptas quos totam! Dolor deleniti inventore quod nihil dignissimos, pariatur repellat? Dignissimos unde, quis sequi molestiae exercitationem non. Modi, excepturi ut perferendis quidem nam reiciendis soluta quia quae nesciunt eaque suscipit rerum delectus consequuntur ipsa, illum alias laborum voluptatem id voluptates itaque quas deleniti vitae!
        </p>
      </Box>
    </Layout>
  )
}

export default About
