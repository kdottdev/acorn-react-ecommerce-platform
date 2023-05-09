import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';
import Active from 'components/quill/Active';
import { Row, Col, Button, Dropdown, Form, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AudioRecorder from 'components/recording/AudioRecorder';

const AddProducts = () => {
  const title = 'Product Detail';
  const description = 'Ecommerce Product Detail Page';
  const [isAlbum, setIsAlbum] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log(isAlbum);

    return () => {};
  }, [isAlbum]);

  // Category
  const [selectValue, setSelectValue] = useState({ value: 'Metal', label: 'Metal' });
  const options = [
    { value: 'Hip-Hop', label: 'Hip-Hop' },
    { value: 'Rye', label: 'Rye' },
    { value: 'Metal', label: 'Metal' },
  ];

  // Editor
  const theme = 'bubble';
  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
    active: {},
  };
  const { quill, quillRef, Quill } = useQuill({ theme, modules });
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {});
      quill.clipboard.dangerouslyPasteHTML(``);
      quill.blur();
    }
  }, [quill]);
  if (Quill && !quill) {
    Quill.debug('error');
    Quill.register('modules/active', Active);
  }

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/products">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Products</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1">
              <CsLineIcons icon="save" />
            </Button>
            <div className="btn-group ms-1 w-100 w-sm-auto">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                <CsLineIcons icon="send" /> <span>Publish</span>
              </Button>
              <Dropdown>
                <Dropdown.Toggle className="dropdown-toggle dropdown-toggle-split" variant="outline-primary" />
                <Dropdown.Menu>
                  <Dropdown.Item>Move</Dropdown.Item>
                  <Dropdown.Item>Archive</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      <Row>
        <Col xl="8">
          {/* Product Info Start */}
          <h2 className="small-title">Product Info</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <div className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" />
                </div>

                {isAlbum && (
                  <div className="mb-3">
                    <Form.Label>Album</Form.Label>
                    <Form.Control type="text" />
                  </div>
                )}
                <div className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Select classNamePrefix="react-select" options={options} value={selectValue} onChange={setSelectValue} placeholder="" />
                </div>

                <div className="mb-3">
                  <Form.Label>Lyrics</Form.Label>
                  <div ref={quillRef} className="sh-25 html-editor html-editor-bubble pe-2" />
                </div>

                <div className="mb-3 ">
                  <Form.Label>Type</Form.Label>
                  <Form.Check label="Single" type="checkbox" onChange={(e) => setIsAlbum(!isAlbum)} />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Product Info End */}

          {/* Inventory Start */}
          <h2 className="small-title">Inventory</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <div className="mb-3">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control type="text" />
                </div>
                <div className="mb-3">
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control type="text" />
                </div>
                <div className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="text" />
                </div>
                <div className="mb-n1">
                  <Form.Label>Settings</Form.Label>
                  <Form.Check type="switch" id="quantitySwitch1" label="Allow out of stock purchase" />
                  <Form.Check type="switch" id="quantitySwitch2" label="Notify low stock" defaultChecked />
                  <Form.Check type="switch" id="quantitySwitch3" label="Display quantity at storefront" />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Inventory End */}

          {/* Shipping Start */}
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Shipping</h2>
            <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
              <span className="align-bottom">Edit Shipping Methods</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </Button>
          </div>
          <Card className="mb-5">
            <Card.Body>
              <Form className="mb-n2">
                <label className="form-check w-100 mb-2">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span className="mb-1 lh-1-25">Standard Shipping</span>
                    <span className="text-muted d-block text-small mt-0">(Price Based Rate)</span>
                  </span>
                </label>
                <label className="form-check w-100 mb-2">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span className="mb-1 lh-1-25">Express Shipping</span>
                    <span className="text-muted d-block text-small mt-0">(Price Based Rate)</span>
                  </span>
                </label>
                <label className="form-check w-100 mb-2">
                  <input type="checkbox" className="form-check-input" defaultChecked />
                  <span className="form-check-label d-block">
                    <span className="mb-1 lh-1-25">Priority Shipping</span>
                    <span className="text-muted d-block text-small mt-0">(Price Based Rate)</span>
                  </span>
                </label>
              </Form>
            </Card.Body>
          </Card>
          {/* Shipping End */}

          {/* Attributes Start */}
          <h2 className="small-title">Attributes</h2>
          <Card className="mb-5">
            <Card.Body>
              {/* <DetailAttributeItem /> */}
              <div className="text-center">
                <Button variant="foreground" className="btn-icon btn-icon-start hover-outline ">
                  <CsLineIcons icon="plus" /> <span>Add New</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
          {/* Attributes End */}
        </Col>

        <Col xl="4">
          {/* Price Start */}
          <h2 className="small-title">Schedule</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form className="mb-n3">
                <div className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <div>
                    <Form.Check inline defaultChecked label="Planned" name="group1" type="radio" id="inline-radio-1" />
                    <Form.Check inline label="In Progress" name="group1" type="radio" id="inline-radio-2" />
                    <Form.Check inline label="Completed" name="group1" type="radio" id="inline-radio-3" />
                  </div>
                </div>

                <div className="mb-3">
                  <Form.Label>Deadline</Form.Label>

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    isClearable
                    placeholderText="I have been cleared!"
                    className="form-control"
                    minDate={new Date()}
                  />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Price End */}

          {/* Video Assets */}
          <h2 className="small-title">Audio Assets</h2>
          <Card className="mb-5">
            <Card.Body>
              {/* <DetailAttributeItem /> */}
              <div className="text-center">
                <Button variant="foreground" className="btn-icon btn-icon-start hover-outline ">
                  <CsLineIcons icon="plus" /> <span>Add New</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
          {/*  Video Assets */}
          {/* Audio Assets */}
          <h2 className="small-title">Video Assets</h2>
          <Card className="mb-5">
            <Card.Body>
              {/* <DetailAttributeItem /> */}
              <div className="text-center">
                <Button variant="foreground" className="btn-icon btn-icon-start hover-outline ">
                  <CsLineIcons icon="plus" /> <span>Add New</span>
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Audio Assets */}
        </Col>
      </Row>
    </>
  );
};

export default AddProducts;
