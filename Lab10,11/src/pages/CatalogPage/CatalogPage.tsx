import React, { useState } from "react";
import "./CatalogPage.scss";
import Card from "../../components/Card/Card";
import { useAppSelector } from "../../hooks/redux";
import {
  useAddProductMutation,
  useGetProductsQuery,
} from "../../store/product/product.api";
import { Product } from "../../models/Product";
import { v4 as uuid4 } from "uuid";
import { CardForm } from "../../components/CardForm/CardForm";
import { useActions } from "../../hooks/actions";

export function CatalogPage() {
  const { chosenProducts } = useAppSelector((state) => state.product);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [addProduct, { isLoading: isAddLoading }] = useAddProductMutation();
  const {
    isLoading: areProductsLoading,
    isFetching,
    data: products,
  } = useGetProductsQuery();
  const { isButtonDisabled } = useAppSelector((state) => state.product);
  const { toggleIsButtonDisabled } = useActions();

  const createProductAfterCloseModal = (product: Product) => {
    setIsCreate(false);

    if (product) {
      product.id = uuid4();
      addProduct(product);
    }

    toggleIsButtonDisabled(false);
  };

  const cancelCreate = () => {
    setIsCreate(false);
    toggleIsButtonDisabled(false);
  };

  return (
    <>
      <section className="page__info info-page">
        <div className="info-page__container">
          <button
            onClick={() => {
              setIsCreate(true);
              toggleIsButtonDisabled(true);
            }}
            className={
              "info-page__new-card-button button " +
              (isButtonDisabled ? "button_disabled" : "")
            }
          >
            <span>Добавить</span>
          </button>
          <div className="info-page__selected-products selected-products">
            <span className="selected-products__text">Выбранно:</span>
            <span className="selected-products__number">
              {chosenProducts.length}
            </span>
          </div>
        </div>
      </section>

      <section className="page__cards cards">
        <div className="cards__container">
          {isCreate && (
            <CardForm
              text={"Добавить"}
              handleCancel={cancelCreate}
              handleUpdateOrCreate={createProductAfterCloseModal}
            />
          )}
          {(areProductsLoading || isAddLoading || isFetching) && (
            <p className="text-center">Loading...</p>
          )}
          {!areProductsLoading &&
            !isAddLoading &&
            !isFetching &&
            products?.map((_) => <Card key={_.id} product={_} />)}
        </div>
      </section>
    </>
  );
}
