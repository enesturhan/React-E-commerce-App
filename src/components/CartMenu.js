import React from "react";
import {
  Badge,
  ListGroup,
  Offcanvas,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/actions/cart.actions";
import { toggle } from "../store/actions/side.menu.action";

function CartMenu() {
  const cartState = useSelector((store) => store.cartState);
  const dispatch = useDispatch();
  const sideMenuState = useSelector((store) => store.sideMenuState);

  const onClose = () => {
    dispatch(toggle(true)); // sideMenuState
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  const onRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const increaseCardItem = (id) => {
    dispatch(increaseQuantity(id));
  };
  const decreaseCardItem = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <Offcanvas
        placement={"end"}
        show={sideMenuState.visible}
        onHide={onClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sepetim</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {cartState.cartItems.map((cartItem) => {
              return (
                <ListGroup.Item
                  key={cartItem.productId}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{cartItem.name}</div>{" "}
                    {(cartItem.quantity * cartItem.price).toFixed(2)} ₺
                  </div>
                  <div>
                    <ButtonGroup className="mb-2 mx-2">
                      <Button
                        className="btn btn-sm btn-light"
                        onClick={() => increaseCardItem(cartItem.productId)}
                      >
                        <i
                          style={{ cursor: "pointer", fontSize: "1rem" }}
                          className="bi bi-file-plus"
                        ></i>{" "}
                      </Button>
                      <Button className="btn btn-sm btn-light">
                        <Badge bg="secondary" pill>
                          {cartItem.quantity}
                        </Badge>
                      </Button>

                      <Button
                        className="btn btn-sm btn-light"
                        onClick={() => decreaseCardItem(cartItem.productId)}
                      >
                        <i
                          style={{ cursor: "pointer", fontSize: "1rem" }}
                          className="bi bi-file-minus"
                        ></i>
                      </Button>
                    </ButtonGroup>
                    <Button
                      onClick={() => onRemoveItem(cartItem.productId)}
                      className="btn-close"
                    ></Button>
                  </div>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            Toplam Tutar : {cartState.total.toFixed(2)}
          </ListGroup.Item>
          {cartState.total > 0 ? (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <Button
                className="ms-auto"
                variant={"danger"}
                onClick={onClearCart}
              >
                Sepeti Temizle
              </Button>
            </ListGroup.Item>
          ) : (
            <></>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default CartMenu;
