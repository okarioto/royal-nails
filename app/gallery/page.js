'use client'
import { useRef, useState, useEffect } from "react";
import Image from 'next/image'



export default function Gallery() {
    const imgCount = 6;
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

                    <img src={`/images/gallery/${focusImage}`} alt="" className=" fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2 max-w-[95vw] max-h-[90vh] w-auto h-auto rounded-xl shadow-md"
                        onClick={(e) => e.stopPropagation()} />

                </div>}

            <div className="m-4 sm:m-10 grid gap-2 sm:gap-10  grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        id={img}
                        src={`/images/gallery/${img}`}
                        alt=""
                        width={288}
                        height={288}
                        className="place-self-center object-cover w-full aspect-square    hover:opacity-70 cursor-pointer  duration-150"
                        onClick={openFloat}
                        loading="lazy"
                    />
                ))}
            </div>
            {isLoading &&
                <div className="text-center font-title tracking-[0.2rem] md:tracking-[1rem] mt-10 mb-10 text-sm md:text-xl"> loading images
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
