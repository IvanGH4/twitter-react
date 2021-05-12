import SearchBox from "./SearchBox";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <div
      className="col-md-3 right-sidebar py-4"
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <aside>
        <SearchBox />
        <div className="my-3">
          <div className="list-group">
            <div className="list-group-item d-flex align-items-center justify-content-between trending">
              <h4 className="text-light fw-bold">Tendencias para ti</h4>
              <i className="fas fa-cog text-light"></i>
            </div>
            <button className="list-group-item list-group-item-action d-flex justify-content-between trending">
              <div>
                <div>
                  <small>Tendencia en Uruguay</small>
                </div>
                <h6>FC Barcelona</h6>
                <div>
                  <small>1.72 M tweets</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </button>
            <button className="list-group-item list-group-item-action d-flex justify-content-between trending">
              <div>
                <div>
                  <small>Tendencia en Uruguay</small>
                </div>
                <h6>FC Barcelona</h6>
                <div>
                  <small>1.72 M tweets</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </button>
            <button className="list-group-item list-group-item-action d-flex justify-content-between trending">
              <div>
                <div>
                  <small>Tendencia en Uruguay</small>
                </div>
                <h6>FC Barcelona</h6>
                <div>
                  <small>1.72 M tweets</small>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </button>
          </div>

          <div className="list-group mt-4">
            <div className="list-group-item d-flex align-items-center justify-content-between trending">
              <h4 className="fw-bold">A quién seguir</h4>
            </div>
            <button className="list-group-item list-group-item d-flex justify-content-between align-items-center trending py-2">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid rounded-circle"
                    src="https://images.unsplash.com/photo-1618048094700-f4817c77838b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=824&q=80"
                    alt="slkdjfskdfj"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div className="ms-1">
                  <h6>Mila Kunis</h6>
                  <div>
                    <small>@milaK</small>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <button className="rounded-pill px-3 py-1 follow-btn fw-bold">
                  Seguir
                </button>
              </div>
            </button>
            <button className="list-group-item list-group-item d-flex justify-content-between align-items-center trending py-2">
              <div className="d-flex">
                <div>
                  <img
                    className="img-fluid rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="slkdjfskdfj"
                  />
                </div>
                <div className="ms-1">
                  <h6>Gal Gadot</h6>
                  <div>
                    <small>@galGadot</small>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <button className="rounded-pill px-3 py-1 follow-btn fw-bold">
                  Seguir
                </button>
              </div>
            </button>
          </div>

          <div className="text-secondary">
            <small>Condiciones de servicio </small>
            <small>Condiciones de servicio </small>
            <small>Condiciones de servicio </small>
            <small>Condiciones de servicio </small>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default RightSidebar;
