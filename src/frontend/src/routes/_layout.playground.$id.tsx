import PlaygroundPage from "@/pages/Playground";
import { Route } from "./+types/_layout.playground.$id";
import FlowPage from "@/pages/FlowPage";
import Page from "@/pages/FlowPage/components/PageComponent";
import { SidebarProvider } from "@/components/ui/sidebar";
import { FlowSearchProvider } from "@/pages/FlowPage/components/flowSidebarComponent";

export async function loader({} : Route.LoaderArgs) {


    return "HI"
}



export default function PlaygroundDefault() {

    return <FlowSearchProvider><SidebarProvider><Page setIsLoading={() => null} /></SidebarProvider></FlowSearchProvider>

}