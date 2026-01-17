import Dropdown from "../components/Dropdown"




export default function PropertySearch(){


    return(
        <div className="border rounded-2xl h-full flex flex-col w-full">
            <div className="flex justify-end">
                <Dropdown />
            </div>
            
            <div className="max-h-full">
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    )
}