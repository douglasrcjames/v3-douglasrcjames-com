// The not-found file is used to render UI when the notFound function is thrown within a route segment.
// TODO: this default 404 doesnt seem to trigger until i refresh the app
export default function NotFound() {
    return (
        <main>
            <h2>404 - Page Not Found</h2>
            <p>Could not find requested resource.</p>
            <a href="/"><button>Return home</button></a>
        </main>
    );
}