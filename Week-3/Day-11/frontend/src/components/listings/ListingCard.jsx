import { useState } from "react";
import ListingModal from "./ListingModal";
function ListingCard({ listing }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="cursor-pointer">
          <img
            src={listing.photo ? listing.photo : "images/house.jpg"}
            alt="listing image"
            onClick={handleShow}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{listing.name}</h2>
          <div className="space-y-2">
            {listing.price > 0 && (
              <p className="text-lg font-bold text-primary">
                ${listing.price.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
      <ListingModal
        key={listing.id}
        listing={listing}
        showModal={showModal}
        onClose={handleClose}
      />
    </>
  );
}

export default ListingCard;
