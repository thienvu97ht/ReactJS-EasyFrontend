import { Box, makeStyles, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { formatPrice } from 'utils';

Product.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0 10px 20px rgba(0,0,0,0.09)',
    },
  },
}));

function Product({ product }) {
  const classes = useStyles();
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    // Navigate to detail page: /products/:productId
    history.push(`/products/${product.id}`);
  };

  return (
    <Box padding={1} onClick={handleClick} className={classes.root}>
      <Box padding={1} minHeight="215px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {formatPrice(product.salePrice)}
        </Box>

        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default Product;
