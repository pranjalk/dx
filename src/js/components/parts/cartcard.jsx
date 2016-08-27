import React from 'react';

export default class CartCard extends React.Component {
  render() {
    return (
      <div className="c-cart-card">
        <div className="c-cart-card-header">
          {this.props.dxcart.name}
        </div>
        <hr className="c-cart-card-hr" />
        <div className="c-cart-card-body">
          { Object.keys(this.props.dxcart.cart).map((itr) =>
            <div key={itr} className="c-cart-card-entry">
              <div className="c-cart-card-entry-name">
                <svg className="icon icon-lab">
                  <title>lab</title>
                  <path class="path1" d="M14.942 12.57l-4.942-8.235v-3.335h0.5c0.275 0 0.5-0.225 0.5-0.5s-0.225-0.5-0.5-0.5h-5c-0.275 0-0.5 0.225-0.5 0.5s0.225 0.5 0.5 0.5h0.5v3.335l-4.942 8.235c-1.132 1.886-0.258 3.43 1.942 3.43h10c2.2 0 3.074-1.543 1.942-3.43zM3.766 10l3.234-5.39v-3.61h2v3.61l3.234 5.39h-8.468z"></path>
                </svg>{this.props.dxcart.cart[itr].name}
              </div>
              <div className="c-cart-card-entry-price">
                &#8377;{this.props.dxcart.cart[itr].price}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
CartCard.propTypes = {
  dxcart: React.PropTypes.object,
};
