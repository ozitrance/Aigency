import type { LinksFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import reactFlowStyles from '@xyflow/react/dist/style.css?url';
import mantineCoreStyles from '@mantine/core/styles.css?url';
import mantineNotficationsStyles from '@mantine/notifications/styles.css?url';
import { createTheme, Portal } from "@mantine/core";
import ContextWrapper from "./contexts";
import classes from "./style/classes.css?url";
import index from "./style/index.css?url";
import styles from "./App.css?url"
import applies from "./style/applies.css?url";
export const theme = createTheme({
    primaryColor: 'blue',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    cursorType: 'pointer',
    components: {
        Portal: Portal.extend({
            defaultProps: {
                reuseTargetNode: true,
            },
        }),
    }
});
  
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: classes },
    { rel: "stylesheet", href: index },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: applies },
    { rel: "stylesheet", href: reactFlowStyles },
    { rel: "stylesheet", href: mantineCoreStyles },
    { rel: "stylesheet", href: mantineNotficationsStyles },
];
const modals = {
//   createEntityModal: CreateEntityModal,
//   sendMessageModal: SendMessageModal,
//   /* ...other modals */
};
export function Layout({ children }: { children: React.ReactNode }) {
    
    
    return (
        <html lang="en" {...mantineHtmlProps}>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <ColorSchemeScript />
            <Meta />
            <Links />
        </head>
        <body>
            <ScrollRestoration />
            <MantineProvider theme={theme}>
            <Notifications />
            <ModalsProvider modals={modals}>
                <ContextWrapper>
                    {children}
                </ContextWrapper>
            </ModalsProvider>
            </MantineProvider>
            <Scripts />
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
