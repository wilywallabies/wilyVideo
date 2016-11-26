import React, {Component} from 'react';
import {bindAll} from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitProfilePic } from '../actions/profileActions';

class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_uri: null,
      processing: false,
      uploaded_uri: false,
      filename: '',
      filetype: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      processing: true,
      uploaded_uri: true
    });

    this.props.submitProfilePic({
      data_uri: this.state.data_uri,
      filename: this.state.filename,
      filetype: this.state.filetype
    });

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
      console.log(this.state);
    };

    reader.readAsDataURL(file);
  }

  render() {
    let processing;
    let uploaded;

    if (this.state.uploaded_uri) {
      console.log('after upload')
      console.log(this.props, "meowww")
      uploaded = (
        <div>
          <h4>Image uploaded!</h4>
          <img className='image-preview' src={this.props.profilePic.profilePic} />
          {/* <pre className='image-link-box'>{this.state.uploaded_uri}</pre> */}
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

function mapStateToProps(state) {
  console.log(state, "state in map state to props");
  return {
    profilePic: state.profilePic
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({submitProfilePic}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePic);
