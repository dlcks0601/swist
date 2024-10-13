import GlobalNavigationBar from '@/components/global-navigation-bar';
import SliderContents from '@/components/slider-contents';
import GlobalPlaylistContents from '@/components/global-playlist-contents';

const MainPage = () => {
    return (
        <div className='relative bg-black'>
            {/* Global Navigation Bar */}
            <div className='absolute top-0 left-0 right-0 z-10'>
                <GlobalNavigationBar />
            </div>

            {/* Slider Contents, will be behind the navigation bar */}
            <div className='relative z-0'>
                <SliderContents />
            </div>

            {/* Global Playlist Contents, placed below the Slider */}
            <div className='relative z-0 overflow-x-auto'>
                <GlobalPlaylistContents />
            </div>
        </div>
    );
};

export default MainPage;
