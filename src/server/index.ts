import { Hono } from "hono"
import users from "./users";

const routes  = new Hono().route('/users', users); 

export default routes;
