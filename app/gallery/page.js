'use client'
import { useRef, useState, useEffect } from "react";



export default function Gallery() {
    const imgCount = 8;
    const loadMoreRef = useRef(null)
    const [focusImage, setFocusImage] = useState("");
    const [floatIsVisible, setFloatIsVisible] = useState(false)
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function fetchImages() {
            try {
                setIsLoading(true);
                const res = await fetch(`/api/images?page=${page}&limit=${imgCount}`);
                const data = await res.json();
                setImages((prev) => [...prev, ...data]);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch images:", error);
            }
        }
        fetchImages();
    }, [page]);



    function observerCallBack(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setPage((prev) => prev + 1);
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallBack, { threshold: 1 });
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => observer.disconnect();
    }, [loadMoreRef]);



    function openFloat(e) {
        setFocusImage(e.target.id);
        setFloatIsVisible(true);
    }
    function closeFloat() {
        setFloatIsVisible(false);
    }
    return (

        <div className="flex-1 flex-col justify-center items-center">
            {floatIsVisible &&
                <div className="fixed top-0 w-screen h-screen bg-white bg-opacity-70 z-10"
                    onClick={closeFloat}>

                    <img src={`/images/gallery/${focusImage}`} alt="" className="fixed top-[50vh] left-[50vw] -translate-x-1/2  -translate-y-1/2  h-[95vw]  md:h-[90vh] w-auto rounded-xl shadow-md opacity-100"
                        onClick={(e) => e.stopPropagation()} />

                </div>}

            <div className="m-10 grid gap-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((img, index) => (
                    <img
                        key={index}
                        id={img}
                        src={`/images/gallery/${img}`}
                        alt=""
                        className="place-self-center object-cover w-[20rem] h-[25rem] rounded-xl shadow-md hover:opacity-70 cursor-pointer hover:scale-95 duration-150"
                        onClick={openFloat}
                        loading="lazy"
                    />
                ))}
            </div>
            {isLoading  && 
                <div className="text-center font-title tracking-[1rem] mt-10 mb-10"> loading images 
                <span className="animate-bounce inline-block ">.</span>
                    <span className="animate-bounce inline-block [animation-delay:0.2s]">.</span>
                    <span className="animate-bounce inline-block [animation-delay:0.4s]">.</span>
                </div>
            }
            <div ref={loadMoreRef} className="absolute left-[50vw] -translate-x-1/2 translate-y-1/2 w-[90vw] h-[10rem] -z-10">
            </div>
        </div>


    );
}
