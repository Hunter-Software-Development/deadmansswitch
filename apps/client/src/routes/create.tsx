import CreateInputs from "../components/createInputs";
import CreateSidebar from "../components/createSidebar";

import { useQuery, useMutation, gql } from "@apollo/client";

import { useEffect, useState } from "react";

const GET_VAULTS = gql`
    query ($userCredential: String!) {
        vaults(googleCredential: $userCredential) {
            _id
            data
        }
    }
`;

const CREATE_VAULT = gql`
    mutation ($userCredential: String!, $data: String!) {
        createVault(createVaultInput: { googleCredential: $userCredential, data: $data }) {
            _id
            googleId
            data
        }
    }
`;

const UPDATE_VAULT = gql`
    mutation ($id: String!, $userCredential: String!, $data: String!) {
        updateVault(updateVaultInput: { _id: $id, googleCredential: $userCredential, data: $data }) {
            _id
            googleId
            data
        }
    }
`;

const REMOVE_VAULT = gql`
    mutation ($id: String!, $userCredential: String!) {
        removeVault(removeVaultInput: { _id: $id, googleCredential: $userCredential }) {
            _id
        }
    }
`;

export default function Create(props: { user: { credential: string } }) {
    const { loading, error, data } = useQuery(GET_VAULTS, {
        variables: {
            userCredential: props.user.credential,
        },
    });

    const [addVault] = useMutation(CREATE_VAULT, {
        variables: {
            userCredential: props.user.credential,
            data: "",
        },
        refetchQueries: [
            {
                query: GET_VAULTS,
                variables: { userCredential: props.user.credential },
            },
        ],
    });

    const [updateVault] = useMutation(UPDATE_VAULT, {
        variables: {
            userCredential: props.user.credential,
        },
        refetchQueries: [
            {
                query: GET_VAULTS,
                variables: { userCredential: props.user.credential },
            },
        ],
    });

    const [removeVault] = useMutation(REMOVE_VAULT, {
        variables: {
            userCredential: props.user.credential,
        },
        refetchQueries: [
            {
                query: GET_VAULTS,
                variables: { userCredential: props.user.credential },
            },
        ],
    });

    const [vaults, setVaults] = useState([{ _id: "", data: "" }]);

    useEffect(() => {
        if (loading === false && data) {
            setVaults(data.vaults);
        }
    }, [loading, data]);

    const [active, setActive] = useState(0);

    if (loading) return <p>Loading...</p>;
    if (error) return <>{error.message}</>;

    return (
        <>
            <header className="bg-white shadow dark:bg-gray-800">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Create and Manage Your Vaults</h1>
                </div>
            </header>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
                <div className="py-12 px-12 bg-white dark:bg-gray-800 rounded-lg">
                    <div className=" flex flex-row flex-wrap w-full">
                        <div className="basis-1/4 p-6">
                            <CreateSidebar vaults={vaults} addNewVault={addVault} setActive={setActive} />
                        </div>

                        <div className="basis-3/4 p-6">
                            <CreateInputs active={active} vaults={vaults} updateVault={updateVault} removeVault={removeVault} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
