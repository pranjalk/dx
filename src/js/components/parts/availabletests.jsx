import React from 'react';

class AvailableTests extends React.Component {
  constructor() {
    super();
    this.clickEvent = this.clickEvent.bind(this);
  }
  clickEvent() {
    this.props.addItem(this.props.data);
  }
  returnButtonIfItemAlreadyAdded() {
    // console.log('my cart is ', this.props.cartShow);
    if (this.props.data.dx_id in this.props.cartShow) {
      if (this.props.data.test_id in this.props.cartShow[this.props.data.dx_id].cart) {
        return (<button className="c-test-add-button">
          <svg className="icon icon-circle-check">
            <title>circle-check</title>
            <path className="path1" d="M24 2q4.484 0 8.555 1.742t7.016 4.687 4.688 7.016 1.742 8.555-1.742 8.555-4.688 7.016-7.016 4.688-8.555 1.742-8.555-1.742-7.016-4.688-4.688-7.016-1.742-8.555 1.742-8.555 4.688-7.016 7.016-4.688 8.555-1.742zM24 6q-3.656 0-6.992 1.43t-5.742 3.836-3.836 5.742-1.43 6.992 1.43 6.992 3.836 5.742 5.742 3.836 6.992 1.43 6.992-1.43 5.742-3.836 3.836-5.742 1.43-6.992-1.43-6.992-3.836-5.742-5.742-3.836-6.992-1.43zM30.734 17.984q0.828 0 1.414 0.586t0.586 1.414-0.594 1.422l-8.484 8.484q-0.578 0.578-1.406 0.578-0.844 0-1.422-0.578l-4.25-4.234q-0.578-0.578-0.578-1.422 0-0.828 0.586-1.414t1.414-0.586 1.422 0.594l2.828 2.828 7.063-7.078q0.594-0.594 1.422-0.594z"></path>
          </svg>
        </button>);
      } else {
        return (<button className="c-test-add-button" onClick={this.clickEvent}>
          <svg className="icon icon-circle-plus">
            <title>circle-plus</title>
            <path className="path1" d="M24 2q4.484 0 8.555 1.742t7.016 4.687 4.688 7.016 1.742 8.555-1.742 8.555-4.688 7.016-7.016 4.688-8.555 1.742-8.555-1.742-7.016-4.688-4.688-7.016-1.742-8.555 1.742-8.555 4.688-7.016 7.016-4.688 8.555-1.742zM24 6q-3.656 0-6.992 1.43t-5.742 3.836-3.836 5.742-1.43 6.992 1.43 6.992 3.836 5.742 5.742 3.836 6.992 1.43 6.992-1.43 5.742-3.836 3.836-5.742 1.43-6.992-1.43-6.992-3.836-5.742-5.742-3.836-6.992-1.43zM24 14q0.828 0 1.414 0.586t0.586 1.414v6h6q0.828 0 1.414 0.586t0.586 1.414-0.586 1.414-1.414 0.586h-6v6q0 0.828-0.586 1.414t-1.414 0.586-1.414-0.586-0.586-1.414v-6h-6q-0.828 0-1.414-0.586t-0.586-1.414 0.586-1.414 1.414-0.586h6v-6q0-0.828 0.586-1.414t1.414-0.586z"></path>
          </svg>
        </button>);
      }
    } else {
      return (<button className="c-test-add-button" onClick={this.clickEvent}>
        <svg className="icon icon-circle-plus">
            <title>circle-plus</title>
            <path className="path1" d="M24 2q4.484 0 8.555 1.742t7.016 4.687 4.688 7.016 1.742 8.555-1.742 8.555-4.688 7.016-7.016 4.688-8.555 1.742-8.555-1.742-7.016-4.688-4.688-7.016-1.742-8.555 1.742-8.555 4.688-7.016 7.016-4.688 8.555-1.742zM24 6q-3.656 0-6.992 1.43t-5.742 3.836-3.836 5.742-1.43 6.992 1.43 6.992 3.836 5.742 5.742 3.836 6.992 1.43 6.992-1.43 5.742-3.836 3.836-5.742 1.43-6.992-1.43-6.992-3.836-5.742-5.742-3.836-6.992-1.43zM24 14q0.828 0 1.414 0.586t0.586 1.414v6h6q0.828 0 1.414 0.586t0.586 1.414-0.586 1.414-1.414 0.586h-6v6q0 0.828-0.586 1.414t-1.414 0.586-1.414-0.586-0.586-1.414v-6h-6q-0.828 0-1.414-0.586t-0.586-1.414 0.586-1.414 1.414-0.586h6v-6q0-0.828 0.586-1.414t1.414-0.586z"></path>
          </svg>
      </button>);
    }
  }
  render() {
    return (
      <div className="c-test-results">
        <div className="c-test-header">
          <div className="c-test-name">
            {this.props.data.name}
          </div>
          <div className="c-test-price">
            &#8377;{this.props.data.price}
          </div>
        </div>
        <div className="c-test-body">
            {this.props.data.description}
        </div>
        {this.returnButtonIfItemAlreadyAdded()}
      </div>
    );
  }
}
AvailableTests.propTypes = {
  addItem: React.PropTypes.func,
  data: React.PropTypes.object,
  name: React.PropTypes.string,
  price: React.PropTypes.string,
  description: React.PropTypes.string,
  cartShow: React.PropTypes.object,
};

export default AvailableTests;
