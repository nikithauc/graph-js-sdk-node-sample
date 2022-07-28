var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GraphServiceClient, SimpleAuthenticationProvider } from "@microsoft/msgraph-sdk-javascript";
const token = "Token";
const authProvider = new SimpleAuthenticationProvider(() => __awaiter(void 0, void 0, void 0, function* () { return token; }));
const client = GraphServiceClient.init({ authProvider });
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.users.get();
        console.log(user.value[0]);
    });
}
test().then(() => console.log("done"));
