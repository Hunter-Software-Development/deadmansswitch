import { PlusIcon, LockClosedIcon } from "@heroicons/react/outline";

export default function CreateSidebar(props: { vaults: { _id: string; data: string }[]; addNewVault: () => any; setActive: any }) {
    return (
        <>
            <div className="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <button key="0" onClick={props.addNewVault} type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <PlusIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                    <b>Add New Vault</b>
                </button>

                {true &&
                    props.vaults.map((data: { _id: string }, i, arr) => (
                        <button key={data._id} onClick={() => props.setActive(data._id)} type="button" className={`${i + 1 === arr.length ? "rounded-b-lg" : "border-b"} placeholder:relative inline-flex items-center w-full px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white`}>
                            <LockClosedIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span className="text-xs">{`Vault ${String(data._id).slice(-12)}`}</span>
                        </button>
                    ))}
            </div>
        </>
    );
}
