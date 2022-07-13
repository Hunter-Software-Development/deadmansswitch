import { AES, enc } from "crypto-js";

import { useEffect, useMemo, useState } from "react";

export default function CreateInputs(props: { active: any; vaults: { _id: string; data: string }[]; updateVault: any; removeVault: any }) {
    let currentData = useMemo(() => props.vaults.find((vault) => vault._id === props.active) || { _id: "", data: "" }, [props.active, props.vaults]);

    const [encryptedData, setEncryptedData] = useState("");
    const [decryptedData, setDecryptedData] = useState("");
    const [key, setKey] = useState("");
    const [id, setId] = useState("");

    const decryptData = () => {
        try {
            let decrypted = AES.decrypt(encryptedData, key).toString(enc.Utf8);
            setDecryptedData(decrypted);
        } catch (error) {
            console.info(error);
        }
        return;
    };

    const encryptData = () => {
        try {
            if (decryptedData) {
                const encrypted = AES.encrypt(decryptedData, key).toString();
                setEncryptedData(encrypted);
            }
        } catch (error) {
            console.info(error);
        }

        return;
    };

    useEffect(() => {
        setId(currentData._id);
        setEncryptedData(currentData.data);
        setDecryptedData("");
    }, [currentData]);

    useEffect(() => {
        if (!decryptedData) {
            decryptData();
        } else {
            encryptData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    useEffect(() => {
        encryptData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [decryptedData]);

    if (props.active === 0 || !currentData._id) return <div className="border-4 border-dashed border-gray-200 rounded-lg h-full" />;

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Vault {props.active}</h1>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Encryption Key
            </label>
            <input
                key={"t" + id}
                type="text"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue=""
                onChange={(event) => {
                    setKey(event.target.value);
                }}
            ></input>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4">
                Decrypted Data
            </label>
            {/* Key here lets react know to re-render the textarea and change the defaultValue */}
            <textarea
                id="message"
                key={"m" + id}
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                defaultValue={decryptedData}
                onChange={(event) => {
                    setDecryptedData(event.target.value);
                }}
            />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4">Encrypted Data</label>

            <textarea id="message" key={"e" + id} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" value={encryptedData} readOnly />

            {props.removeVault && (
                <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 float-left"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete this vault?")) {
                            props.removeVault({ variables: { id: currentData._id } });
                        }
                    }}
                >
                    Delete
                </button>
            )}

            {props.updateVault && (
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 float-right" onClick={() => props.updateVault({ variables: { id: currentData._id, data: encryptedData } })}>
                    Save
                </button>
            )}
        </>
    );
}
