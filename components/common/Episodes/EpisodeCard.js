import Image from 'next/image';

export const EpisodeCard = ({ episode }) => {
    return (
        <div className="episodeCard">
            <Image src="/./Donkey.jpeg" width={200} height={200} layout='responsive' />
        </div>
    )
}