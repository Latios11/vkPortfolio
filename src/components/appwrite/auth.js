import conf from '../Conf/Conf.js';
import { Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    
export {client, account}
