import React from 'react'
import { useState, useEffect } from 'react'
import Data from '../../data/Data'
import Gallery from 'react-photo-gallery'
import Maintenance from '../../components/Maintenance/Maintenance'

export default function GalleryPage() {

    const [gallery, setGallery] = useState([])
    useEffect(() => {
        setGallery(Data().gallery)
    }, [])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container">
            {/* <Gallery photos={gallery} /> */}
            <Maintenance />
        </div>
    )
}
