import React, { useEffect, useState } from "react";

interface NegativeImagesProps {
    count: number;
}

const NegativeImages: React.FC<NegativeImagesProps> = ({ count }) => {
    const [urlImg, setUrlImg] = useState('');

    useEffect(() => {
        switch (count){
            case 0:
                setUrlImg('https://giphy.com/embed/xT5LMSQ4RzdXEbFx7y');
                break;
            case 1:
                setUrlImg('https://giphy.com/embed/gnE4FFhtFoLKM');
                break;
            case 2:
                setUrlImg('https://giphy.com/embed/WRQBXSCnEFJIuxktnw');
                break;
            case 3:
                setUrlImg('https://giphy.com/embed/1zSz5MVw4zKg0');
                break;
            case 4:
                setUrlImg('https://giphy.com/embed/yYSSBtDgbbRzq');
                break;
            case 5:
                setUrlImg('https://giphy.com/embed/xjQFLBF97zIYQqPh4B');
                break;
            case 6:
                setUrlImg('https://giphy.com/embed/Lo2hZm2etXjJm');
                break;
            case 7:
                setUrlImg('https://giphy.com/embed/P5AGXvRzq1MWY');
                break;
            case 8:
                setUrlImg('https://giphy.com/embed/7XlapHfB96K0hOOg3Q');
                break;
            case 9:
                setUrlImg('https://giphy.com/embed/YqE3jbSQQR6x9g19Kj');
                break;
            default:
                setUrlImg('https://giphy.com/embed/vyTnNTrs3wqQ0UIvwE');
                break;
        }
    }, [count]);

    return (
        <div style={{ width: "100%" }}>
            <iframe
                src={urlImg}
                width="100%"
                height="380"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default NegativeImages;
