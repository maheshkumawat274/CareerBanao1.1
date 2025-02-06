import useFetch from "hooks/useFetch";
import JobCard from "./JobCard"
// import { SearchOutlined } from "@ant-design/icons";
// import { Input, Select } from "antd";
import no_data_found from "../../../assets/no_data.gif"
import TextSkeleton from "ui/TextSkeleton";

// const options = [
//   {
//     value: "Select Job Type",
//     label: "Select Job Type",
//   },
//   {
//     value: "Permanent",
//     label: "Permanent",
//   },
//   {
//     value: "Intern",
//     label: "Intern",
//   },
// ]

function CurrentOpening() {
  const [data, loading] = useFetch("/getCurrentJob");

  return (
     <div className="bg-[#EDEDE9] p-6 font-poppins">
        <div id="currentOpening" className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
          <p className="text-gray-600 text-lg">
            Check out all the openings here. We'll be happy to hear from you. If
            you're interested to work with us, just send across your resume to us.
          </p>
        </div>
      <div className="flex justify-center">
      <div className="flex flex-wrap gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {/* ---------------- when needen it will we uncommented ---------------- */}
      {/* <div className="search-container flex w-full justify-center gap-1 lg:gap-3 items-center">
        <Input
          size="large"
          placeholder="Search Job by title"
          prefix={<SearchOutlined />}
        />

        <Select
          defaultValue="Select Job Type"
          size="large"
          options={options}
        />
        <div><button className="rounded-md hover:bg-hoverBtn bg-primaryBtn text-m py-[7px] px-[12px] text-white font-semibold ">Reset</button></div>
      </div> */}

      {loading ? <TextSkeleton />
        : (data as JobCardType[])?.filter((item)=> item.status == "0" && item.delete_status != "1").length > 0 ?
          <>
            {
             (data as JobCardType[])?.filter((item)=> item.status == "0" && item.delete_status != "1").map((item) => (
                <JobCard data={item} />
              ))
            }

          </> : 
          <img src={no_data_found} className="w-full mt-5 object-contain h-[350px]" />
      }

    </div>
      </div>
   </div>
  );
}

export default CurrentOpening;



