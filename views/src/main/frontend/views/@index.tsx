import { ExampleEndpoint } from 'Frontend/generated/endpoints';
import {useSignal} from "@vaadin/hilla-react-signals";
import {useEffect} from "react";
import {VerticalLayout} from "@vaadin/react-components";

export default function MainView() {
    const endpointText = useSignal<string | undefined>(undefined)

    async function updateEndpointText() {
        endpointText.value = await ExampleEndpoint.getText()
    }

    useEffect(() => {
        updateEndpointText().catch(console.error)
    }, [])

    return <VerticalLayout theme="padding spacing">
        <h1>VAADIN MULTI-MODULE DEMO</h1>
        <h2>{endpointText}</h2>
    </VerticalLayout>
}