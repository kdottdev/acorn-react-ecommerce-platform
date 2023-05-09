import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Badge, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';
import { formatDistanceToNowStrict } from 'date-fns';

const ProjectsList = () => {
  const title = 'Project List';
  const description = 'Ecommerce Project List Page';

  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const toggleCheckAll = (allSelect) => {
    if (allSelect) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  const projectsData2 = [
    {
      _id: '609aeb7e9b9a051cdca90f30',
      title: 'Album Recording',
      projectDescription: 'Recording and producing a new album',
      projectDeadline: '2023-05-03T00:00:00.000Z',
      status: 'In Progress',
      audioAssets: [
        {
          assetName: 'Track 1',
          assetDescription: 'Lead vocals',
          assetFileType: 'wav',
          assetFilePath: '/audio/album/track1.wav',
          assetCreatedAt: new Date('2023-01-01'),
          assetUpdatedAt: new Date('2023-01-02'),
        },
        {
          assetName: 'Track 2',
          assetDescription: 'Guitar solo',
          assetFileType: 'mp3',
          assetFilePath: '/audio/album/track2.mp3',
          assetCreatedAt: new Date('2023-01-02'),
          assetUpdatedAt: new Date('2023-01-03'),
        },
      ],
      videoAssets: [],
      collaborators: [
        {
          collaboratorName: 'John Doe',
          collaboratorEmail: 'john.doe@example.com',
          collaboratorRole: 'Producer',
        },
        {
          collaboratorName: 'Jane Smith',
          collaboratorEmail: 'jane.smith@example.com',
          collaboratorRole: 'Musician',
        },
      ],
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-03'),
    },

    {
      _id: '609aeb7e9b9a051cdca90f31',
      title: 'Podcast Production',
      projectDescription: 'Producing a weekly podcast series',
      projectDeadline: '2023-06-15T00:00:00.000Z',
      status: 'In Progress',
      audioAssets: [
        {
          assetName: 'Episode 1',
          assetDescription: 'Interview with guest',
          assetFileType: 'mp3',
          assetFilePath: '/audio/podcast/ep1.mp3',
          assetCreatedAt: new Date('2023-03-01'),
          assetUpdatedAt: new Date('2023-03-02'),
        },
        {
          assetName: 'Episode 2',
          assetDescription: 'Roundtable discussion',
          assetFileType: 'mp3',
          assetFilePath: '/audio/podcast/ep2.mp3',
          assetCreatedAt: new Date('2023-03-08'),
          assetUpdatedAt: new Date('2023-03-09'),
        },
      ],
      videoAssets: [],
      collaborators: [
        {
          collaboratorName: 'Sarah Lee',
          collaboratorEmail: 'sarah.lee@example.com',
          collaboratorRole: 'Producer',
        },
        {
          collaboratorName: 'Mike Chen',
          collaboratorEmail: 'mike.chen@example.com',
          collaboratorRole: 'Host',
        },
      ],
      createdAt: new Date('2023-03-01'),
      updatedAt: new Date('2023-03-09'),
    },

    {
      _id: '609aeb7e9b9a051cdca90f32',
      title: 'Video Ad Campaign',
      projectDescription: 'Producing a series of video ads for a new product launch',
      projectDeadline: '2023-06-15T00:00:00.000Z',
      status: 'Completed',
      audioAssets: [],
      videoAssets: [
        {
          assetName: 'Ad 1',
          assetDescription: '30-second product demo',
          assetFileType: 'mp4',
          assetFilePath: '/video/ads/ad1.mp4',
          assetCreatedAt: new Date('2023-05-01'),
          assetUpdatedAt: new Date('2023-05-02'),
        },
        {
          assetName: 'Ad 2',
          assetDescription: '15-second teaser',
          assetFileType: 'mov',
          assetFilePath: '/video/ads/ad2.mov',
          assetCreatedAt: new Date('2023-05-10'),
          assetUpdatedAt: new Date('2023-05-11'),
        },
      ],
      collaborators: [
        {
          collaboratorName: 'David Lee',
          collaboratorEmail: 'david.lee@example.com',
          collaboratorRole: 'Director',
        },
        {
          collaboratorName: 'Karen Wong',
          collaboratorEmail: 'karen.wong@example.com',
          collaboratorRole: 'Cinematographer',
        },
        {
          collaboratorName: 'Mark Kim',
          collaboratorEmail: 'mark.kim@example.com',
          collaboratorRole: 'Editor',
        },
      ],
      createdAt: new Date('2023-04-01'),
      updatedAt: new Date('2023-05-11'),
    },
  ];

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Home</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
              <CsLineIcons icon="plus" /> <span>Add Project</span>
            </Button>
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
              <CsLineIcons icon="sort" />
            </Button>
            <div className="btn-group ms-1 check-all-container">
              <CheckAll
                allItems={allItems}
                selectedItems={selectedItems}
                onToggle={toggleCheckAll}
                inputClassName="form-check"
                className="btn btn-outline-primary btn-custom-control py-0"
              />
              <Dropdown align="end">
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

      <Row className="mb-3">
        <Col md="5" lg="3" xxl="2" className="mb-1">
          {/* Search Start */}
          <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
            <Form.Control type="text" placeholder="Search" />
            <span className="search-magnifier-icon">
              <CsLineIcons icon="search" />
            </span>
            <span className="search-delete-icon d-none">
              <CsLineIcons icon="close" />
            </span>
          </div>
          {/* Search End */}
        </Col>
        <Col md="7" lg="9" xxl="10" className="mb-1 text-end">
          {/* Print Button Start */}
          <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Print</Tooltip>}>
            <Button variant="foreground-alternate" className="btn-icon btn-icon-only shadow">
              <CsLineIcons icon="print" />
            </Button>
          </OverlayTrigger>
          {/* Print Button End */}

          {/* Export Dropdown Start */}
          <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Export</Tooltip>}>
              <Dropdown.Toggle variant="foreground-alternate" className="dropdown-toggle-no-arrow btn btn-icon btn-icon-only shadow">
                <CsLineIcons icon="download" />
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
              <Dropdown.Item href="#">Copy</Dropdown.Item>
              <Dropdown.Item href="#">Excel</Dropdown.Item>
              <Dropdown.Item href="#">Cvs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Export Dropdown End */}

          {/* Length Start */}
          <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Item Count</Tooltip>}>
              <Dropdown.Toggle variant="foreground-alternate" className="shadow sw-13">
                10 Items
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
              <Dropdown.Item href="#">5 Items</Dropdown.Item>
              <Dropdown.Item href="#">10 Items</Dropdown.Item>
              <Dropdown.Item href="#">20 Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Length End */}
        </Col>
      </Row>

      {/* List Header Start */}
      <Row className="g-0 mb-2 d-none d-lg-flex">
        <Col xs="auto" className="sw-11 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 h-100 align-content-center custom-sort ps-5 pe-4 h-100">
            <Col xs="3" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-small cursor-pointer sort">PROJECT TITLE</div>
            </Col>
            <Col xs="2" lg="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">DEADLINE</div>
            </Col>
            <Col xs="2" lg="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">COLLABORATORS</div>
            </Col>
            <Col xs="2" lg="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">STATUS</div>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* List Header End */}

      {/* mapped list */}

      {projectsData2.map((item, index) => (
        <Card key={item.id} className={`mb-2 ${selectedItems.includes(item.id) && 'selected'}`}>
          <Row className="g-0 h-100 sh-lg-9 position-relative">
            <Col xs="auto" className="positio-relative">
              <NavLink to="/Projects/detail">
                <img src={`/img/product/small/product-${index + 1}.webp`} alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
              </NavLink>
            </Col>
            <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
              <Row className="g-0 h-100 align-content-center">
                <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                  <NavLink to="/Projects/detail">
                    {item.title}
                    <div className="text-small text-muted text-truncate">{item.subtitle}</div>
                  </NavLink>
                </Col>
                <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                  <div className="lh-1 text-alternate">{formatDistanceToNowStrict(new Date(item.projectDeadline))}</div>
                </Col>
                <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                  <div className="lh-1 text-alternate">
                    {item.collaborators.map((collaborator) => (
                      <div className="lh-1 py-1  text-alternate" key={collaborator.collaboratorName}>
                        {collaborator.collaboratorName}
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                  {item.status}
                </Col>
                <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                  <Form.Check
                    className="form-check mt-2 ps-7 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => checkItem(item.id)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      ))}
      {/* mapped list end  */}

      {/* List Items Start */}
      {/* <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-1.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Anpan
                  <div className="text-small text-muted text-truncate">#2342</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">2.511</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 62.20</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                <Badge bg="outline-primary">SALE</Badge>
              </Col>
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(1)} onChange={() => checkItem(1)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(2) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-2.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Bagel
                  <div className="text-small text-muted text-truncate">#2567</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">352</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 41.15</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                <Badge bg="outline-primary">SALE</Badge>
              </Col>
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(2)} onChange={() => checkItem(2)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(3) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-3.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Bannock
                  <div className="text-small text-muted text-truncate">#1831</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">1.531</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 7.50</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(3)} onChange={() => checkItem(3)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(4) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-4.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Cholermüs
                  <div className="text-small text-muted text-truncate">#1558</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">729</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 18.00</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(4)} onChange={() => checkItem(4)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(5) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-5.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Fougasse
                  <div className="text-small text-muted text-truncate">#1179</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">917</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 18.00</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                <Badge bg="outline-quaternary">LOW STOCK</Badge>
              </Col>
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(5)} onChange={() => checkItem(5)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(6) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-6.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Kulcha
                  <div className="text-small text-muted text-truncate">#5622</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">592</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 52.50</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(6)} onChange={() => checkItem(6)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(7) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-7.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Mohnflesserl
                  <div className="text-small text-muted text-truncate">#3457</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">2.849</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 14.10</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(7)} onChange={() => checkItem(7)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(8) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-8.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Pistolet
                  <div className="text-small text-muted text-truncate">#4832</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">902</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 32.60</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                <Badge bg="outline-secondary">NEW</Badge>
              </Col>
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(8)} onChange={() => checkItem(8)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(9) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-9.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Rieska
                  <div className="text-small text-muted text-truncate">#2611</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">614</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 19.15</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5">
                <Badge bg="outline-secondary">NEW</Badge>
              </Col>
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(9)} onChange={() => checkItem(9)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(10) && 'selected'}`}>
        <Row className="g-0 h-100 sh-lg-9 position-relative">
          <Col xs="auto" className="positio-relative">
            <NavLink to="/Projects/detail">
              <img src="/img/product/small/product-10.webp" alt="Project" className="card-img card-img-horizontal sw-11 h-100" />
            </NavLink>
          </Col>
          <Col className="py-4 py-lg-0 ps-5 pe-4 h-100">
            <Row className="g-0 h-100 align-content-center">
              <Col xs="11" lg="3" className="d-flex flex-column mb-lg-0 mb-3 pe-3 d-flex order-1 h-lg-100 justify-content-center">
                <NavLink to="/Projects/detail">
                  Zopf
                  <div className="text-small text-muted text-truncate">#3470</div>
                </NavLink>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-3">
                <div className="lh-1 text-alternate">1.852</div>
              </Col>
              <Col lg="3" className="d-flex flex-column pe-1 mb-2 mb-lg-0 justify-content-center order-4">
                <div className="lh-1 text-alternate">$ 68.00</div>
              </Col>
              <Col lg="2" className="d-flex flex-column pe-1 mb-2 mb-lg-0 align-items-start justify-content-center order-5" />
              <Col xs="1" className="d-flex flex-column mb-2 mb-lg-0 align-items-end order-2 order-lg-last justify-content-lg-center">
                <Form.Check className="form-check mt-2 ps-7 ps-md-2" type="checkbox" checked={selectedItems.includes(10)} onChange={() => checkItem(10)} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card> */}
      {/* List Items End */}

      {/* Pagination Start */}
      <div className="d-flex justify-content-center mt-5">
        <Pagination>
          <Pagination.Prev className="shadow" disabled>
            <CsLineIcons icon="chevron-left" />
          </Pagination.Prev>
          <Pagination.Item className="shadow" active>
            1
          </Pagination.Item>
          <Pagination.Item className="shadow">2</Pagination.Item>
          <Pagination.Item className="shadow">3</Pagination.Item>
          <Pagination.Next className="shadow">
            <CsLineIcons icon="chevron-right" />
          </Pagination.Next>
        </Pagination>
      </div>
      {/* Pagination End */}
    </>
  );
};

export default ProjectsList;
