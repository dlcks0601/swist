import PlaylistCard from '@/components/playlist-card';
import sampleImg from '@/assets/images/sampleimg.jpg';

const GlobalPlaylistContents = () => {
    const playlists = [
        {
            image: sampleImg,
            title: 'toyomag playlist vol.1',
            name: 'toyomag',
            date: '2024.10.13',
        },
        {
            image: sampleImg,
            title: 'toyomag playlist vol.2',
            name: 'toyomag',
            date: '2024.10.13',
        },
        {
            image: sampleImg,
            title: 'toyomag playlist vol.3',
            name: 'toyomag',
            date: '2024.10.13',
        },
    ];

    return (
        <div className='flex flex-col w-full max-w-[1200px] mx-auto h-auto px-4 py-[50px]'>
            {/* 상단 타이틀과 더보기 */}
            <div className='w-full flex justify-between items-center px-4 py-[22px]'>
                <div className='font-bold text-white text-[28px] sm:text-[32px] md:text-[40px]'>
                    플레이리스트
                </div>
                <div className='font-medium text-[#8c8c8c] text-[20px] sm:text-[24px] md:text-[32px]'>
                    더보기
                </div>
            </div>

            {/* 고정 크기의 플레이리스트 카드 목록, 가로 스크롤 가능 */}
            <div className='flex gap-[25px] px-[25px] py-2.5 overflow-x-auto scrollbar-hide'>
                {playlists.map((playlist, index) => (
                    <div key={index} className='flex-shrink-0'>
                        <PlaylistCard
                            image={playlist.image}
                            title={playlist.title}
                            name={playlist.name}
                            date={playlist.date}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GlobalPlaylistContents;
