import { GlobeAltIcon, LightningBoltIcon, ScaleIcon, CodeIcon } from "@heroicons/react/outline";

export default function Home() {
    const features = [
        {
            name: "1. Create Vaults of Data for Free",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: GlobeAltIcon,
        },
        {
            name: "2. Encrypt Data With a Key Only You Know",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: ScaleIcon,
        },
        {
            name: "3. Allow Trusted Individuals To Access Your Data",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: LightningBoltIcon,
        },
        {
            name: "View Code On GitHub",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: CodeIcon,
        },
    ];

    return (
        <>
            <header className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Home</h1>
                </div>
            </header>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="py-12 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Beta</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Dead Man's Switch</p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
