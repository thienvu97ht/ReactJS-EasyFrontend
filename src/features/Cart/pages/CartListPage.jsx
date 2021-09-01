import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';
import { cartItemCountSelector } from '../selectors';

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  table: {
    borderSpacing: '0 10px',
    borderCollapse: 'separate',
  },
}));

const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '8px',
    fontWeight: '400',
    backgroundColor: 'white',
  },

  head: {},
}))(TableCell);

function CartListPage(props) {
  const classes = useStyles();
  const cartQuantity = useSelector(cartItemCountSelector);
  const cartItems = useSelector((state) => state.cart.cartItem);

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item className={classes.left} xs={12} sm={8} md={8} lg={9}>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Tất cả ({cartQuantity} sản phẩm)</StyledTableCell>
                    <StyledTableCell>Đơn giá</StyledTableCell>
                    <StyledTableCell>Số lượng</StyledTableCell>
                    <StyledTableCell>Thành tiền</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton>
                        <DeleteOutline />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CartList cartItems={cartItems} />
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item className={classes.right} xs={12} sm={5} md={4} lg={3}>
            <p>Địa chỉ</p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartListPage;
