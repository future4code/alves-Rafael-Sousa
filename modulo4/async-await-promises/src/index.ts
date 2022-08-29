import express from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { BaseUrl } from "./types";
import axios from "axios";
import { user } from "./types";




const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;



//1) (C)

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BaseUrl} /subscribers`);
    return response.data
}
getSubscribers()

// exercicio 2

//B)
const subscribersget = async (): Promise<any[]> =>{
    const resp = await axios.get(`${BaseUrl}/subscribers`);
    return resp.data
}
subscribersget()

//exercicio 3

//C)

const getSubscriber = async (): Promise<user[]> =>{
    const res = await axios.get(`${BaseUrl}/subscribers`);
    return res.data.map((res:any)=>{
        return {
            id: res.id,
            name: res.name,
            email: res.email
        };
    });
};

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${BaseUrl}/news`, {
      title: title,
      content: content, 
      date: date
    });
  };


  const sendNotifications = async (
    users: user[],
    message: string): Promise<void> =>{
        try {
            for(const user of users){
                await axios.post(`${BaseUrl}/notifications`, {
                    subscriberId: user.id,
                    message
               });
              }
              console.log("todas notificações foram entregue");
        } catch (error) {
            console.log(error)
        }
    };
    

    
        const NotificationsSend  = async (
            users: user[],
            message: string
          ): Promise<void> => {
          
              try {
                const promises = users.map(user =>{
                  return axios.post(`${BaseUrl}/notifications`, {
                    subscriberId: user.id,
                    message: message,
                  })
                })
              
                await Promise.all(promises);
          
              } catch {
                  console.log("Error");
              }
          };

