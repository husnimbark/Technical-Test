import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "react-query";

function AddKabupaten({ show, handleAddKabupaten, handleClose }) {
  let navigate = useNavigate();
  let api = API();

  const [form, setForm] = useState({
    nama: "",
    diresmikan: "",
    photo: "",
  });

  const {
    nama,
   diresmikan,
   photo,
 
  } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        form
      };

      const response = await api.post("/book", config);
    } catch (error) {}
  });

  return (
    <Modal show={show} centered>
      <Modal.Body className="text-dark">
        <div className="justify-content-center">
          <div className="card-auth p-4">
            <div
              className="d-flex justify-content-end fs-3 fa-2x"
              aria-hidden="true"
              onClick={handleClose}
            >
              <Icon.XLg />
            </div>
            <div className="mb-3 f-1 fs-2 fw-bold">Add Book</div>
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              <div>
                <input
                  type="name"
                  placeholder="Nama Provinsi"
                  name="nama"
                  value={nama}
                  onChange={handleChange}
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Diresmikan"
                  name="diresmikan"
                  value={diresmikan}
                  onChange={handleChange}
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
              <div className="d-flex gap-5 mx-auto">
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className=" f-2 fw-bold w-25 mt-5"
                />
              </div>

              <div className="d-grid gap-2 mt-5">
                <Button className="btn btn-dark f-2 fw-bold" type="submit">
                  Add
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddKabupaten;
