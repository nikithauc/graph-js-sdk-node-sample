import {GraphServiceClient, SimpleAuthenticationProvider} from "@microsoft/msgraph-sdk-javascript";

const token = "Token";
const authProvider = new SimpleAuthenticationProvider(async()=>{return token});

const client = GraphServiceClient.init({authProvider});

async function test(){

    const user = await client.users.get();
    console.log(user.value[0]);
}

test().then(()=>console.log("done"));

