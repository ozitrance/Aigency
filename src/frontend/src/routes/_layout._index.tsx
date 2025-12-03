import { Route } from "./+types/_layout._index";


export async function loader({} : Route.LoaderArgs) {

    return "Hello Aigency"
}