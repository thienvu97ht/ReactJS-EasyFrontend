import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  box: {
    maxWidth: '200px',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
  },
}));

function QuantityField(props) {
  const classes = useStyles();
  const { form, name, label } = props;
  const { control, setValue } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, error },
      }) => (
        <>
          <FormControl
            error={isTouched && invalid}
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
          >
            <Typography>{label}</Typography>
            <Box className={classes.box}>
              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)
                }
              >
                <RemoveCircleOutline />
              </IconButton>

              <OutlinedInput
                id={name}
                error={invalid}
                type="number"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />

              <IconButton
                onClick={() =>
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)
                }
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
}

export default QuantityField;
