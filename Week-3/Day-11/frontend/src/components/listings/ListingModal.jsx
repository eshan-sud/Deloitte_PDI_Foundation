import { useEffect, useRef } from "react";

function ListingModal({ listing, showModal, onClose }) {
  const modalRef = useRef(listing);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [showModal]);
  return (
    <>
      <dialog ref={modalRef} className="modal" onClose={onClose}>
        <div className="modal-box w-11/12 max-w-5xl">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <figure className="w-full">
            <img
              src={listing.photo ? listing.photo : "images/house.jpg"}
              alt={listing?.name}
              className="w-full h-auto object-cover max-h-[50vh] rounded-lg"
            ></img>
          </figure>
          <div className="mt-6 space-y-4">
            <h3 className="font-bold text-2xl">{listing.name}</h3>

            {listing.price > 0 && (
              <div>
                <span className="font-semibold">Price: </span>
                <span className="text-primary font-bold text-xl">
                  ${listing.price.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default ListingModal;
