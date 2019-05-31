import * as React from "react";
import { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import axios, { CancelTokenSource } from "axios";

interface IPost {
    userId: number;
    id?: number;
    title: string;
    body: string;
}
const defaultPosts: IPost[] = [];

const SqlExport: FunctionComponent = () => {

    const handleExport = () => setShowModal(true);
    const handleModalOKClick = () => setShowModal(false);
    const [showModal, setShowModal] = useState(false);

    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
    const [error, setError]: [string, (error: string) => void] = React.useState("");
    const cancelToken = axios.CancelToken;
    const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelSourceToken: CancelTokenSource) => void] = React.useState(cancelToken.source());

    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState(false);
    const [editPost, setEditPost]: [IPost, (post: IPost) => void] = React.useState({
        body: "",
        title: "",
        userId: 1
    });

    return (
        <div className="sql-export">
            <Modal show={showModal} centered={true} className="export-modal">
                <Modal.Header>
                    <Modal.Title>Export</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your SQL script has been exported</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalOKClick}> Close </Button>
                </Modal.Footer>
            </Modal>
            {/* Use of React Bootstrap https://github.com/react-bootstrap/react-bootstrap */}
            <Button variant="primary" onClick={handleExport}>Export</Button>
        </div>
    );
}
export default SqlExport;
