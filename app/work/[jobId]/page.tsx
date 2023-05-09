
export default function Page({ params }: {
    params: { jobId: string };
}) {
    const jobs = [
        {
            id: "1",
            title: "Job 1; Beginners Guide",
            content: `This is Job 1. Laborum reprehenderit dolor consequat excepteur fugiat qui aliquip ad enim cillum dolore reprehenderit sunt nostrud. Ullamco qui adipisicing proident nulla reprehenderit magna qui veniam est exercitation tempor. Ea cillum tempor aliqua dolor Lorem aute esse amet. Dolore aliqua nulla sit aliquip deserunt elit. Consectetur do in laboris commodo sit consectetur sit ut id eiusmod id ipsum id.
            Cupidatat aute magna occaecat velit anim sunt velit consequat ipsum cillum incididunt non deserunt. Quis laboris consectetur fugiat ea nostrud voluptate. Ex non commodo do laborum eiusmod minim laborum consequat magna.`,
        },
        {
            id: "2",
            title: "Job 2; Extended Cut",
            content: `This is Job 2. Lorem esse aliquip exercitation culpa aute commodo qui elit et duis.Amet ullamco nisi excepteur anim 
            cupidatat duis aliqua duis officia reprehenderit occaecat ullamco.Culpa consequat eu sit sint sit ea ad sint ut.Commodo sint pariatur occaecat elit qui et ipsum.`,
        },
        {
            id: "3",
            title: "Job 3; The Lost Jobs",
            content: `This is Job 3. Qui minim ad non id elit minim aute consequat consectetur. Qui minim ad non id elit minim aute consequat consectetur.Qui minim ad non id elit minim aute consequat consectetur.Qui minim ad non id elit minim aute consequat consectetur.`,
        },
    ];
    
    if (jobs.find(job => job.id === params.jobId)) {
        const job = jobs.find(job => job.id === params.jobId)
        return (
                <main>
                    <h1>{job?.title ?? ""}</h1>
                    <p>
                        {job?.content ?? ""}
                    </p>
                    <span>JOB ID: {job?.id ?? "Job not found..."}</span>
                </main>
            )
    } else {
        return (
            <main>
                <h1>Job not found...</h1>
                <p>Job with ID: {params.jobId} not found</p>
            </main>
        )
    }
}