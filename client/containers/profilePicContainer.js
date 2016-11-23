// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import React, {Component} from 'react';
import {bindAll} from 'lodash';

export default class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_uri: null,
      filename: file.name,
      filetype: file.type
    }

    bindAll(this, 'handleFile', 'handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let processing;
    let uploaded;

    if (this.state.uploaded_uri) {
      uploaded = (
        <div>
          <h4>Image uploaded!</h4>
          <img className='image-preview' src={this.state.uploaded_uri} />
          <pre className='image-link-box'>{this.state.uploaded_uri}</pre>
        </div>
      );
    }

    if (this.state.processing) {
      processing = "Processing image, hang tight";
    }

    return (
      <div className='row'>
        <div className='col-sm-12'>
          <label>Upload an image</label>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <input type="file" onChange={this.handleFile} />
            <input disabled={this.state.processing} className='btn btn-primary' type="submit" value="Upload" />
            {processing}
          </form>
          {uploaded}
        </div>
      </div>
    );
  }
}
