import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {Divider, Row, Col, Input, Button, Image, Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import * as actions from '../store/users/actions/actions';
import { uploadFile } from 'react-s3';

window.Buffer = window.Buffer || require("buffer").Buffer;

const Profile = () => {
    const navigate = useNavigate();

    const {load, usr} = useSelector(({users}) => ({
        load: users.loading,
        usr: users.user,
      }), shallowEqual);

    const dispatcher = useDispatch();

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileType, setFileType] = useState(".png")

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    
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
        await dispatcher(actions.uploadPic(file, usr))
        navigate("/home")
        
    }
    return (
        <div className="home">
            <Spin indicator={antIcon} spinning={load}/>
            <Divider>
            <Row gutter = {16}>
            <Col span={8}>
            <Image src= {usr.profile_picture_link}/>
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