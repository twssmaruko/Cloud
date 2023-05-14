import React, {useState} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {Divider, Row, Col, Input, Button, Image} from 'antd';

import { uploadFile } from 'react-s3';

window.Buffer = window.Buffer || require("buffer").Buffer;

const Profile = () => {
    const navigate = useNavigate();
    const config = {
        bucketName: "aimsbconnectbucket",
        Name: "test.png",
        region: "us-east-1",
        accessKeyId: "",
        secretAccessKey: ""
    }

    const {load, usr} = useSelector(({users}) => ({
        load: users.loading,
        usr: users.user,
      }), shallowEqual);

    const dispatcher = useDispatch();

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState(".png")

    const selectFile = (data) => {
        if(data.type === 'image/png') {
            setFileType('.png')
        } else if (data.type === 'image/jpeg'){
            setFileType('.jpg')
        }
        const blob = data.slice(0, data.size, data.type);
        const newFile = new File([blob], usr.username + fileType, {type: data.type});
        setSelectedFile(newFile)
    }
    const uploadPic = async(file) => {
        try {
            uploadFile(file, config)
        } catch (err) {
            console.log(err.message)
        }
        
    }
    return (
        <div className="home">
            <Divider>
            <Row gutter = {16}>
            <Col span={8}>
            <Image src="https://aimsbconnectbucket.s3.amazonaws.com/tanjiro.png"/>
            </Col>
            <Col span={8}>
            <input type="file" style={{display:'Upload'}} onChange={(e) =>{selectFile(e.target.files[0])}} multiple />
            <button onClick={() => {uploadPic(selectedFile)}}>Upload</button>
            </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}/>
                <Col>
                    <Input />
                </Col>
                <Col span={8}/>
            </Row>
            <Row>
                <Col>
                    <Input />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Input />
                </Col>
            </Row>
            </Divider>
            <Row>
                <Col>
                    <Button onClick={() => {navigate("/home")}}>Back</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Profile;