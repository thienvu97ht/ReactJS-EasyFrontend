import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, makeStyles, Paper, TableCell, TableRow, withStyles } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { formatPrice } from 'utils';
import ProductThumbnail from 'features/Product/components/ProductThumbnail';

CartItem.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  tableCell: {
    display: 'flex',
    alignItems: 'center',
  },

  thumbnail: {
    width: '80px',
    marginRight: theme.spacing(2),
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

function CartItem({ product = {} }) {
  const classes = useStyles();

  const totalPrice = product.product.salePrice * product.quantity;

  console.log(product.product);

  return (
    <TableRow key={product.name}>
      <StyledTableCell className={classes.tableCell}>
        <ProductThumbnail product={product.product} className={classes.thumbnail} />
        {product.product.name}
      </StyledTableCell>
      <StyledTableCell>{formatPrice(product.product.salePrice)}</StyledTableCell>
      <StyledTableCell>{product.quantity}</StyledTableCell>
      <StyledTableCell>{formatPrice(totalPrice)}</StyledTableCell>
      <StyledTableCell align="right">
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </StyledTableCell>
    </TableRow>
  );
}

export default CartItem;
