import axios from "axios";

const GET = async (url: string, token: string) => {
    await axios({
        method: "get",
        url: url,
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const POST = async (url: string, token: string, data: any) => {
    await axios({
        method: "post",
        url: url,
        headers: {
            "Content-Type": "application/json",
            token: token,
        },
        data: data,
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

export { GET, POST };
