import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import CreateInputs from "../components/createInputs";

const GET_VAULT = gql`
    query ($id: String!) {
        vault(getVaultInput: { _id: $id }) {
            _id
            data
        }
    }
`;

export default function Retrieve() {
    const [vault, setVault] = useState({ _id: "", data: "" });
    const [id, setId] = useState("");

    const [getVault, { data }] = useLazyQuery(GET_VAULT, {
        variables: {
            id,
        },
    });

    const findVault = async () => {
        getVault({
            variables: {
                id,
            },
        });

        console.log(data);
        return;
    };

    useEffect(() => {
        if (data) {
            setVault(data.vault);
            console.log(vault);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <>
            <header className="bg-white shadow dark:bg-gray-800">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Retrieve Data Using a Vault Number And Key</h1>
                </div>
            </header>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
                <div className="py-12 px-12 bg-white dark:bg-gray-800 rounded-lg">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Vault Id
                    </label>
                    <input
                        key={"t"}
                        type="text"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue=""
                        onChange={(event) => {
                            setId(event.target.value);
                        }}
                    ></input>

                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => {
                            findVault();
                        }}
                    >
                        Find
                    </button>
                    <br />
                    {vault.data && (
                        <>
                            <hr className="my-3" />
                            <CreateInputs active={vault._id} vaults={[vault]} updateVault={false} removeVault={false} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
