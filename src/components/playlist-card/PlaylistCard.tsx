import sampleImg from '@/assets/images/sampleimg.jpg';

interface PlaylistCardProps {
    image: string; // 이미지 경로를 string으로 받음
    title: string; // 플레이리스트 제목
    name: string; // 작성자 이름
    date: string; // 날짜 정보
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
    image = sampleImg,
    title,
    name,
    date,
}) => {
    return (
        <div className='flex flex-col w-full sm:w-[300px] md:w-[410px] items-start gap-4 px-0 py-[25px] relative bg-black font-sans'>
            <img
                className='relative w-full h-[200px] sm:h-[250px] md:h-[360px] object-cover'
                alt={title}
                src={image}
            />
            <div className='flex flex-col items-start gap-[5px] p-2.5 w-full'>
                <div className='font-bold text-white text-[20px] sm:text-[28px] md:text-[32px] truncate'>
                    {title}
                </div>
                <div className='font-medium text-[#a1a1a1] text-[18px] sm:text-[24px] md:text-[32px]'>
                    {name}
                </div>
                <div className='font-light text-[#a7a7a7] text-[14px] sm:text-[18px] md:text-2xl'>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default PlaylistCard;
