/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        serverComponentsHmrCache: false, // Defaults true
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avdruqscqmqbvmwwtekm.supabase.co",
            },
        ],
    },

    async headers(){
        return [
            {
                source: "/embed",
                headers: [
                    {   
                        key: "Content-Security-Policy",
                        value: "frame-src 'self' https://vehiql-landing.created.app/"
                    },
                ]
            }
        ]
    }
};

export default nextConfig;
