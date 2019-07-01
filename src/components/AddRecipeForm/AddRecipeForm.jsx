import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, FieldArray } from 'formik'
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box
} from '@material-ui/core'

const AddRecipeForm = ({ classes, values, isSubmitting, handleSubmit, setFieldValue }) => {
  return (
    <Form>
      <Container maxWidth={'lg'}>
        <Box mt={3}>
          <Paper className={classes.recipePaper} elevation={10}>
            <Box mb={3}>
              <Typography>What's the Secret Recipe?</Typography>
              <Grid
                container
                spacing={0}
                direction="row"
                justify="space-between"
                alignItems="flex-start"
              >
                <Grid item lg={7}>

                </Grid>
                <Grid item>

                </Grid>
              </Grid>
            </Box>
            <Grid
              container
              spacing={0}
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >

            </Grid>
          </Paper>
        </Box>
      </Container>
    </Form>
  )
}

export default AddRecipeForm


