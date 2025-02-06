import JobCard from "./JobCard";

function JobList({ jobs }: any) {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {jobs.map((job: any) => (
          <JobCard key={job.job_id} data={job} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
