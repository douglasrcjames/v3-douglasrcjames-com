
export default function Music() {
    const songs = [
        {
            id: "0",
            name: "Beats 123",
            artist: "Douglas",
        },
        {
            id: "1",
            name: "Beats 234",
            artist: "DD",
        },
        {
            id: "2",
            name: "Beats 345",
            artist: "CC",
        },
    ];

    return (
        <main className="container px-5">
            <h1>Music</h1>
            <p>Links to my music channels, but focus will be on Spotify playlist API connection. This is coming soon!</p>
            {/* {
                songs.map((song, i) => {
                    return (
                        <div key={i} className="px-5 py-2 rounded border-2 border-blue-500 border my-10">
                            <h3>Name: {song.name}</h3>
                            <h4>Artist: {song.artist}</h4>
                            <p>ID: {song.id}</p>
                        </div>
                    )
                })
            } */}
            
            
        </main>
    );
}