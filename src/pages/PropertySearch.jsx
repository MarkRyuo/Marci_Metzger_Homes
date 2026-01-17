import Dropdown from "../components/Dropdown"




export default function PropertySearch(){


    return(
        <div className="border rounded-2xl h-full flex justify-center flex-col w-full">
            <div className="justify-self-end">
                <Dropdown />
            </div>
            
            <div>
                <Dropdown />
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    )
}