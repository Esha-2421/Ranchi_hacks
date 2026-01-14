import React from 'react'
import NavMenu from './NavMenu'
import Form from 'react-bootstrap/Form';
import '../Styles/Report.css';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Report = () => {
  return (
    <div>
      <NavMenu/>
      <h1 className="report-header">Report an Issue</h1>
      <p>Help your community by sharing what you're observing. Your report will be <br/> 
      reviewed and contribute to our shared city understanding.</p>
      <Container>
        <Row>
            <Col md={3}></Col>
            <Col md={6}>
                <Form className="report-form form">
  <Form.Group className="mb-3">
    <Form.Label>
      What type of issue are you reporting? <span className="text-danger">*</span>
    </Form.Label>
    <Form.Select required>
      <option value="">Select issue type</option>
      <option>Traffic Issue</option>
      <option>Road Blockage</option>
      <option>Power Cut</option>
      <option>Water Supply Issue</option>
      <option>Accident</option>
      <option>Public Safety</option>
      <option>Other</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>
      Where is this happening? <span className="text-danger">*</span>
    </Form.Label>
    <Form.Control
      type="text"
      placeholder="e.g., Main Chowk, Station Road"
      required
    />
    <Form.Text className="text-muted">
      Provide a landmark or street name that others will recognize
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>
      What are you observing? <span className="text-danger">*</span>
    </Form.Label>
    <Form.Control
      as="textarea"
      rows={4}
      placeholder="Describe what you're seeing or experiencing..."
      required
    />
    <Form.Text className="text-muted">
      Be specific but concise. This helps others understand the situation.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-4">
  <Form.Label>Photo or Video (Optional)</Form.Label>

  <div className="upload-box">
    <input
      type="file"
      className="upload-input"
      accept="image/*,video/*"
      capture="environment"
    />

    <div className="upload-content">
      <div className="upload-icon">⬆</div>
      <div className="upload-text">
        Click to upload or take a photo
      </div>
      <div className="upload-subtext">
        PNG, JPG, MP4 up to 10MB
      </div>
    </div>
  </div>
</Form.Group>


  <div className="d-grid">
    <button type="submit" className="btn btn-primary btn-lg">
      Submit Report
    </button>
  </div>
</Form>

            </Col>
            <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Report
