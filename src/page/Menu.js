import React from 'react'
import Layout from '../component/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../data/data'

function Menu() {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          MenuList.map(menu => (
            <Card sx={{maxWidth: 370, mx: 2, my: 3}}>
              <CardActionArea>
                <CardMedia sx={{minHeight: 400 }} component={'img'} src={menu.image} alt={menu.name} />
                <CardContent>
                  <Typography variant='h5' gutterBottom>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu
