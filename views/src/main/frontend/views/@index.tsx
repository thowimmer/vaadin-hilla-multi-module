import { ExampleEndpoint } from 'Frontend/generated/endpoints';
import {useSignal} from "@vaadin/hilla-react-signals";
import {useEffect} from "react";

export default function MainView() {
    const endpointText = useSignal<string | undefined>(undefined)

    async function updateEndpointText() {
        endpointText.value = await ExampleEndpoint.getText()
    }

    useEffect(() => {
        updateEndpointText().catch(console.error)
    }, [])

    return <>
        <h1>VAADIN MULTI-MODULE DEMO</h1>
        <h2>{endpointText}</h2>
    </>
}