import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 2, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({});

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullname" label="Full Name" form={form} />
        <InputField name="email" label="Emal" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
