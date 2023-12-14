import React from 'react'

function CategoriesPopUp() {
  return (<>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">

            <div>
              <p className="d-inline-flex gap-1 mb-0">
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Home
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <DropdwonContent />
              </div>
            </div>
            <hr />
            <div>
              <p className="d-flex gap-1 mb-0">
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                  Mega Menu
                </button>
              </p>
              <div className="collapse" id="collapseExample1">
                <DropdwonContent />
              </div>
            </div>
            <hr />
            <div>
              <p className="d-flex gap-1 mb-0">
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                  Pages
                </button>
              </p>
              <div className="collapse" id="collapseExample3">
                <DropdwonContent />
              </div>
            </div>

            <hr />
            <div>

              <p className="d-flex gap-1 mb-0">
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                  User Account
                </button>
              </p>
              <div className="collapse" id="collapseExample4">
                <DropdwonContent />
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  </>
  )
}
function DropdwonContent() {
  return (<>
    <ul>
      <li>Action</li>
      <li>Another action</li>
      <li>Something else here</li>
    </ul>
  </>)
}
export default CategoriesPopUp