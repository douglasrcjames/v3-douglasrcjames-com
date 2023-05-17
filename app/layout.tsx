
import './styles/globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const metadata = {
    title: 'Douglas RC James',
    description: 'Douglas R.C. James is a professional computer engineer out of Portland, Oregon.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen">
                    <Header />
                    <div>
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
